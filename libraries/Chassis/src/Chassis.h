/*
 * @Description: Library of FishChassis
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-20 00:41:51
 * @LastEditors: qianwan
 */
#ifndef CHASSIS_H
#define CHASSIS_H

#include <cstdint>

#include "./Mavlink/FishChassis/mavlink.h"
#include "Arduino.h"
#include "SPI.h"

#define MSG_SPI_FLAG 0xAB   // Flag used to calculate crc
#define MSG_SPI_MAX_LOSE 2  // packages
#define MSG_RECNT_TIM 33    // ms

#define MSG_SPI_TOTAL_TX_LEN (MAVLINK_MSG_ID_CHS_ODOM_INFO_LEN)
#define MSG_SPI_TOTAL_RX_LEN                                                 \
    (MAVLINK_MSG_ID_CHS_CTRL_INFO_LEN + MAVLINK_MSG_ID_CHS_SERVOS_INFO_LEN + \
     MAVLINK_MSG_ID_CHS_MANAGE_INFO_LEN)

#if (MSG_SPI_TOTAL_TX_LEN > MSG_SPI_TOTAL_RX_LEN)
#define MSG_SPI_LEN (MSG_SPI_TOTAL_TX_LEN + 1)
#else
#define MSG_SPI_LEN (MSG_SPI_TOTAL_RX_LEN + 1)
#endif

// struct spi_tx_data_processed_t {
//   mavlink_chs_motor_info_t chs_motor_info;
//   mavlink_chs_servos_info_t chs_servos_info;
//   mavlink_chs_manage_info_t chs_manage_info;
//   bool update;
// };

class Chassis {
protected:
    mavlink_chs_motor_info_t chs_ctrl={};  // chassis control info
    mavlink_chs_servos_info_t chs_servos = {1499, 1499, 1499, 1499,
                                            1499, 1499, 1499};  // chassis servos info
    mavlink_chs_odom_info_t chs_odom={};                           // chassis odom info
    mavlink_chs_manage_info_t chs_manage={};                       // chassis manage info
    uint32_t _lose_cnt = 0;                                     // lose count
    uint32_t _lose_cnt_tmp = 0;                                 // lose count tmp

    bool _chassis_online = true;  // chassis online flag

public:
    Chassis(){};
    void Init();
    bool Update();

    bool MotorsUnlock();
    bool MotorsLock();
    bool PWMUnlock();
    bool PWMLock();

    bool RstINS();

    bool Move(int16_t wheel0, int16_t wheel1, int16_t wheel2, int16_t wheel3);
    bool SetServosDutyCycle(uint8_t id, uint16_t duty_cycle);

    bool IsOnline() { return _chassis_online; };

    float GetVelocity(uint8_t pst);
    float GetINS(uint8_t pst);
    uint32_t GetLoseCnt() { return _lose_cnt; };
};

#endif
