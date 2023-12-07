#include "Arduino.h"
#include "Chassis.h"

void Chassis::Init()
{
	SPI.begin();
	SPI.write16(0x1234);

}
void Chassis::Move(uint8_t position)
{
	;
}
