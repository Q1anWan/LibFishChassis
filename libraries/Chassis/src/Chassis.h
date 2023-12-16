#ifndef CHASSIS_H
#define CHASSIS_H

#include "Arduino.h"
#include "SPI.h"

struct wheel
{
	/* data */
	float velocity;
	float encoder;
};

class Chassis
{
protected:
	bool _chassis_enable = 0;
	bool _headless = 0;
	wheel _wheels[4]={0};
	float _wheelD = 0.075;
	float _max_speed = 2.0;
public:
	Chassis(float wheelD=0.075f):_wheelD(wheelD){};
	void Init();
	void Update();
	
	void Unlock();
	void Lock();

	void ClearOdemeter();
	float GetOdemeter(uint8_t wheel);
	void MoveVelocity(float wheel0, float wheel1, float wheel2, float wheel3);
};

#endif
