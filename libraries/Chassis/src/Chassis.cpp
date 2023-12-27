#include "Arduino.h"
#include "Chassis.h"


void Chassis::Init()
{
	SPI.setFrequency(8000000);
	SPI.setHwCs(false);
	pinMode(SPI.pinSS(), OUTPUT);
	SPI.begin();
	
}

void Chassis::Update()
{



}

void Chassis::MoveVelocity(int16_t wheel0, int16_t wheel1, int16_t wheel2, int16_t wheel3)
{

	// digitalWrite(SPI.pinSS(),0);
	// SPI.write16(0x1234);
	// digitalWrite(SPI.pinSS(),1);
}
