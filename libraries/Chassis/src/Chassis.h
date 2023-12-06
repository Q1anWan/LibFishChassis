#ifndef CHASSIS_H
#define CHASSIS_H

#include "Arduino.h"
#include "Wire.h"

class Chassis
{

public:
	Chassis(){};
	void chassis_set(uint8_t position);
};

#endif
