#include "Arduino.h"
#include "Chassis.h"

void Chassis::Init()
{
	SPI.setFrequency(8000000);
	SPI.begin();
	// SPI.setHwCs(1);
	pinMode(SPI.pinSS(), OUTPUT);
	// digitalWrite(SPI.pinSS(),1);
	// digitalWrite(SPI.pinSS(),0);
	// SPI.write16(0xFFFF);
	// digitalWrite(SPI.pinSS(),1);
}

void Chassis::Update()
{



}

void Chassis::MoveVelocity(float wheel0, float wheel1, float wheel2, float wheel3)
{

	// digitalWrite(SPI.pinSS(),0);
	// SPI.write16(0x1234);
	// digitalWrite(SPI.pinSS(),1);
}
