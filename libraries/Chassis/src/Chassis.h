/*
 * @Description: Library of FishChassis
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-02-02 11:08:44
 * @LastEditors: qianwan
 */
#ifndef CHASSIS_H
#define CHASSIS_H

#include <cstdint>

#include "./Mavlink/FishCom/mavlink.h"
#include "Arduino.h"
#include "SPI.h"

#define MSG_SPI_FLAG 0xAB   // Flag used to calculate crc
#define MSG_SPI_MAX_LOSE 2  // packages
#define MSG_RECNT_TIM 33    // ms

#define MSG_MOTOR_EXTERN_FDB_LEN 4
#define MSG_MOTOR_EXTERN_CTRL_LEN 12

#define MSG_SPI_TOTAL_TX_LEN (MAVLINK_MSG_ID_CHS_ODOM_INFO_LEN + MSG_MOTOR_EXTERN_FDB_LEN + MAVLINK_MSG_ID_CHS_REMOTER_INFO_LEN )
#define MSG_SPI_TOTAL_RX_LEN (MSG_MOTOR_EXTERN_CTRL_LEN + MAVLINK_MSG_ID_CHS_SERVOS_INFO_LEN + MAVLINK_MSG_ID_CHS_MANAGE_INFO_LEN)

#if (MSG_SPI_TOTAL_TX_LEN > MSG_SPI_TOTAL_RX_LEN)
#define MSG_SPI_LEN (MSG_SPI_TOTAL_TX_LEN + 1)
#else
#define MSG_SPI_LEN (MSG_SPI_TOTAL_RX_LEN + 1)
#endif

#pragma pack(push) //保存对齐状态
#pragma pack(1)
struct Msg_MotorExtern_t {
    int16_t motor[6];
};
struct Msg_MotorExternFDB_t {
    int16_t motor[2];
};
#pragma pack(pop) //恢复对齐状态


enum eRMT{
    RMT_ID_CH0 = 0,
    RMT_ID_CH1,
    RMT_ID_CH2,
    RMT_ID_CH3,
    RMT_ID_WHEEL,
    RMT_ID_SWL,
    RMT_ID_SWR
};

class Chassis {
protected:
    Msg_MotorExtern_t chs_ctrl = {};  // chassis control info
    Msg_MotorExternFDB_t chs_extern_fdb = {};  // chassis extern fdb info
    mavlink_chs_servos_info_t chs_servos = {1499, 1499, 1499, 1499,
                                            1499, 1499, 1499};  // chassis servos info
    mavlink_chs_odom_info_t chs_odom = {};                      // chassis odom info
    mavlink_chs_manage_info_t chs_manage = {};                  // chassis manage info
    mavlink_chs_remoter_info_t chs_remoter = {};                // chassis remoter info
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
    bool MoveExtern(int16_t motor4, int16_t motor5);

    bool SetServosDutyCycle(uint8_t id, uint16_t duty_cycle);

    bool IsOnline() { return _chassis_online; };

    float GetVelocity(uint8_t pst);
    int16_t GetExternMotorRPM(uint8_t id);

    float GetINS(uint8_t pst);
    uint32_t GetLoseCnt() { return _lose_cnt; };

    int16_t GetRemoter(uint8_t id);
    bool IsRemoterOnline(){
        return chs_remoter.switch_messgae&0x01;
    }    
};

#endif
