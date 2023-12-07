#ifndef CHASSIS_H
#define CHASSIS_H

#include "Arduino.h"
#include "SPI.h"

class Chassis
{
public:
	Chassis(){};
	void Init();
	void Move(uint8_t position);
};

#endif
