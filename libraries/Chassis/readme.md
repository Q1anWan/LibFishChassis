# Chassis - The innoX Chassis Driver
The Chassis is a arduino library to control FishChassis embedded system during innox 2024 robotic winter camp for high school student students.    
The Chassis library implements fundamental funcions that could control the FishChassis embedded system.   
The Chassis library based on the FishCom protocol, but not relys on mavlink communication machine. It only depends on structs that defineded by FishCom with a specific CRC-8 method. Therefor, it could have a high efficiency on SPI communication. 

## Class: Chassis
This class contains basic instance for FishCom protocol, which is the protocol that could control the FishChassis embedded system literally.

### Class Functions
```C++
/**
 * @description: Initialize the chassis
 * @param {*}
 * @return {*}
 */
void Chassis::Init();

/**
 * @description: Update the data from chassis
 * @details Must periodically call this function
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::Update();

/**
 * @description: Unlock the chassis motors
 * @details Chassis motors will enable velocity close-loop control or not
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::MotorsUnlock()

/**
 * @description: Lock the chassis
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::MotorsLock()

/**
 * @description: Unlock the servos
 * @details PWM generation will be enabled
 * @param {*}
 * @return
 *  0: success
 *  1: fail
*/
bool Chassis::PWMUnlock()

/**
 * @description: Lock the servos
 * @details PWM generation will be disabled
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::PWMLock()

/**
  * @description: Get the velocity of chassis
  * @param {uint8_t} Pst
    0: x-axis m/s
    1: y-axis m/s
    2: z-axis °/s
  * @return
    velocity
*/
float Chassis::GetVelocity(uint8_t pst)

/**
  * @description: Get INS data
  * @details RFU coordinate system
  * @details ZYX rotation order
  * @param {uint8_t} Pst
    0: Yaw dgree/s
    1: Ptich dgree/s
    2: Roll dgree/s
  * @return
    Euler angle
*/
float Chassis::GetINS(uint8_t pst)

/**
 * @description: Reset INS Quaternion as (1, 0, 0, 0)
 * @param {*}
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::RstINS()

/**
 * @description: Control wheels
 * @details remember to unlock the motors first
 * @param {int16_t} wheel0 rpm
 * @param {int16_t} wheel1 rpm
 * @param {int16_t} wheel2 rpm
 * @param {int16_t} wheel3 rpm
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::Move(int16_t wheel0, int16_t wheel1, int16_t wheel2, int16_t wheel3)

/**
 * @description: Set the duty cycle of servos
 * @details remember to unlock the PWM first
 * @param {uint8_t} id
 * @param {uint16_t} duty_cycle
 * @return
 *   0: success
 *   1: fail
 */
bool Chassis::SetServosDutyCycle(uint8_t id, uint16_t duty_cycle)

```