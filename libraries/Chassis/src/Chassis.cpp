/*
 * @Description: Library of chassis driver
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-20 00:46:03
 * @LastEditors: qianwan
 */
#include "Chassis.h"
#include "Arduino.h"
#include "CRC8.h"
#include "math.h"
#include "string.h"
#include <cstdint>

uint8_t spi_tx_buf[MSG_SPI_LEN];
uint8_t spi_rx_buf[MSG_SPI_LEN];

/**
 * @description: Initialize the chassis
 * @param {*}
 * @return {*}
 */
void Chassis::Init() {
  SPI.setFrequency(4000000);
  SPI.setHwCs(false);
  SPI.begin();
  pinMode(SPI.pinSS(), OUTPUT);
  digitalWrite(SPI.pinSS(), 1);
}

/**
 * @description: Update the data of chassis
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::Update() {
  uint8_t crc_val;

  if (!_chassis_online) {
    vTaskDelay(MSG_RECNT_TIM);
    chs_ctrl.motor[0] = 0;
    chs_ctrl.motor[1] = 0;
    chs_ctrl.motor[2] = 0;
    chs_ctrl.motor[3] = 0;
    chs_manage.enable_chassis = 0;
    chs_manage.enable_servos = 0;
  }

  memcpy(spi_tx_buf, &chs_ctrl, sizeof(mavlink_chs_motor_info_t));
  memcpy(spi_tx_buf + sizeof(mavlink_chs_motor_info_t), &chs_servos,
         sizeof(mavlink_chs_servos_info_t));
  memcpy(spi_tx_buf + sizeof(mavlink_chs_motor_info_t) +
             sizeof(mavlink_chs_servos_info_t),
         &chs_manage, sizeof(mavlink_chs_manage_info_t));
  spi_tx_buf[MSG_SPI_LEN - 1] = MSG_SPI_FLAG;
  spi_tx_buf[MSG_SPI_LEN - 1] = cal_crc8_table(spi_tx_buf, MSG_SPI_LEN);
  chs_manage.reset_quaternion = 0;

  digitalWrite(SPI.pinSS(), 0);
  SPI.transferBytes(spi_tx_buf, spi_rx_buf, MSG_SPI_LEN);
  digitalWrite(SPI.pinSS(), 1);

  crc_val = spi_rx_buf[MSG_SPI_LEN - 1];
  spi_rx_buf[MSG_SPI_LEN - 1] = MSG_SPI_FLAG;
  
  if (crc_val != cal_crc8_table(spi_rx_buf, MSG_SPI_LEN)) {
    if (_lose_cnt_tmp + 1 > MSG_SPI_MAX_LOSE) {
      _lose_cnt++;
      _chassis_online = false;
    } else {
      _lose_cnt_tmp++;
    }
  } else {
    _lose_cnt_tmp = 0;
    _chassis_online = true;
    memcpy(&chs_odom, spi_rx_buf, sizeof(mavlink_chs_odom_info_t));
  }
  return _chassis_online;
}

/**
 * @description: Unlock the chassis
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::MotorsUnlock() {
  if (_chassis_online) {
    chs_manage.enable_chassis = true;
    return 0;
  }
  return 1;
}

/**
 * @description: Unlock the servos
 * @param {*}
 * @return
 *  0: success
 *  1: fail
*/
bool Chassis::PWMUnlock() {
  if (_chassis_online) {
    chs_manage.enable_servos = true;
    return 0;
  }
  return 1;
}

/**
 * @description: Lock the chassis
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::MotorsLock() {
  chs_manage.enable_chassis = false;
  chs_ctrl.motor[0] = 0;
  chs_ctrl.motor[1] = 0;
  chs_ctrl.motor[2] = 0;
  chs_ctrl.motor[3] = 0;
  return _chassis_online;
}

/**
 * @description: Lock the servos
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::PWMLock() {
  chs_manage.enable_servos = false;
  return _chassis_online;
}

/**
 * @description: Reset INS Quaternion as (1, 0, 0, 0)
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::RstINS() {
  if (_chassis_online) {
    chs_manage.reset_quaternion = true;
    return 0;
  }
  return 1;
}

/**
  * @description: Get the velocity of chassis
  * @param {uint8_t} Pst
    0: x-axis m/s
    1: y-axis m/s
    2: z-axis °/s
  * @return
    velocity
*/
float Chassis::GetVelocity(uint8_t pst) {
  switch (pst) {
  case 0:
    return chs_odom.vx;
    break;
  case 1:
    return chs_odom.vy;
    break;
  case 2:
    return chs_odom.vw*57.2957795f;
    break;
  default:
    return 0;
    break;
  }
}

/**
  * @description: Get INS data
  * @param {uint8_t} Pst
    0: Yaw dgree/s
    1: Ptich dgree/s
    2: Roll dgree/s
  * @return
    dgree
*/
float Chassis::GetINS(uint8_t pst) {
  switch (pst) {
  case 0:
    return atan2f(2.0f * (chs_odom.quaternion[0] * chs_odom.quaternion[3] +
                          chs_odom.quaternion[1] * chs_odom.quaternion[2]),
                  2.0f * (chs_odom.quaternion[0] * chs_odom.quaternion[0] +
                          chs_odom.quaternion[1] * chs_odom.quaternion[1]) -
                      1.0f) *
           57.295779513f;
    break;
  case 1:
    return atan2f(2.0f * (chs_odom.quaternion[0] * chs_odom.quaternion[1] +
                          chs_odom.quaternion[2] * chs_odom.quaternion[3]),
                  2.0f * (chs_odom.quaternion[0] * chs_odom.quaternion[0] +
                          chs_odom.quaternion[3] * chs_odom.quaternion[3]) -
                      1.0f) *
           57.295779513f;
    break;
  case 2:
    return asinf(-2.0f * (chs_odom.quaternion[1] * chs_odom.quaternion[3] -
                          chs_odom.quaternion[0] * chs_odom.quaternion[2])) *
           57.295779513f;
    break;
  default:
    return 0;
    break;
  }
}

/**
 * @Description: Control wheels
 * @param {int16_t} wheel0
 * @param {int16_t} wheel1
 * @param {int16_t} wheel2
 * @param {int16_t} wheel3
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::Move(int16_t wheel0, int16_t wheel1, int16_t wheel2,
                   int16_t wheel3) {
  if (_chassis_online) {
    chs_ctrl.motor[0] = wheel0;
    chs_ctrl.motor[1] = wheel1;
    chs_ctrl.motor[2] = wheel2;
    chs_ctrl.motor[3] = wheel3;
    return 0;
  }
  return 1;
}

/**
 * @Description: Set the duty cycle of servos
 * @param {uint8_t} id
 * @param {uint16_t} duty_cycle
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::SetServosDutyCycle(uint8_t id, uint16_t duty_cycle) {
  if ((id > 6) || (_chassis_online == false)) {
    return 1;
  }
  if (duty_cycle > 2499) {
    duty_cycle = 2499;
  } else if (duty_cycle < 499) {
    duty_cycle = 499;
  }

  chs_servos.servos[id] = duty_cycle;
  return 0;
}