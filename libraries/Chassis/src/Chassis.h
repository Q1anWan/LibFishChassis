/*
 * @Description: Library of FishChassis
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2023-12-27 11:51:59
 * @LastEditors: qianwan
 */
#ifndef CHASSIS_H
#define CHASSIS_H

#include "Arduino.h"
#include "SPI.h"
#include "./Mavlink/FishChassis/mavlink.h"
#include <cstdint>

#define MSG_RX 0
#define MSG_TX 
class Chassis
{
protected:
	mavlink_chs_ctrl_info_t chs_ctrl[2];
	mavlink_chs_servos_info_t chs_servos[2];
	mavlink_chs_odom_info_t chs_odom;
	mavlink_chs_manage_info_t chs_manage;
	int16_t _wheels[4]={0};

public:
	Chassis(){};
	void Init();
	void Update();
	
	void Unlock();
	void Lock();

	void MoveVelocity(int16_t wheel0, int16_t wheel1, int16_t wheel2, int16_t wheel3);
};

#endif
