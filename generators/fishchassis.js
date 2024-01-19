/*
 * @Description: FishChassis mixly arduino  library
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-20 03:09:03
 * @LastEditors: qianwan
 */
'use strict';

goog.provide('Blockly.Arduino.base');
goog.require('Blockly.Arduino');
goog.require('Mixly.JSFuncs');


Blockly.Arduino.forBlock.chassis_init = function() {
    var task = 'chs';
    var core = 0;
    var value_length = 1024;
    var auto_en = this.getFieldValue('init_reen_motors');
    var loop_code = 'void task_' +task+ '( void * pvParameters ){\n  chs.Init();\n  for(;;){\n    chs.Update();';
    if(auto_en=="On"){
        loop_code += '\n    if(chs.IsOnline()){\n      chs.MotorsUnlock();\n    }';
    }
    auto_en = this.getFieldValue('init_reen_pwm');
    if(auto_en=="On"){
        loop_code += '\n    if(chs.IsOnline()){\n      chs.PWMUnlock();\n    }';
    }
    loop_code += '\n    vTaskDelay(10);\n  }\n}\n';
    
    Blockly.Arduino.definitions_['include_chassis'] = '#include <Chassis.h>';
    Blockly.Arduino.definitions_['var_declare_chs'] = `Chassis chs;`;
    Blockly.Arduino.definitions_['esp32_task_'+task] = loop_code;
    Blockly.Arduino.setups_['setups_esp32_task_'+task] = 'xTaskCreatePinnedToCore(task_' +task+ ', "task_' +task+ '", '+value_length+', NULL, 2, NULL, '+core+');';
    return '';
};

Blockly.Arduino.forBlock.chassis_check_cn = function() {
    var code = 'chs.IsOnline()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.chassis_set_motors_status = function() {
    var enable = this.getFieldValue('chs_en_motors');
    var code;
    if(enable=="Enable"){
        code = 'chs.MotorsUnlock();\n';
    }
    else{
        code = 'chs.MotorsLock();\n';
    }
    return code;
};

Blockly.Arduino.forBlock.chassis_set_pwm_status = function() {
    var enable = this.getFieldValue('chs_en_pwm');
    var code;
    if(enable=="Enable"){
        code = 'chs.PWMUnlock();\n';
    }
    else{
        code = 'chs.PWMLock();\n';
    }
    return code;
};


Blockly.Arduino.forBlock.chassis_rst_ins = function() {
    var code = 'chs.RstINS();\n';
    return code;
};

Blockly.Arduino.forBlock.chassis_get_ins = function() {
    var dropdown_ins = this.getFieldValue('ins_type');
    var code = 'chs.GetINS('+dropdown_ins+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.chassis_get_vel = function() {
    var dropdown_ins = this.getFieldValue('vel_type');
    var code = 'chs.GetVelocity('+dropdown_ins+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.chassis_move = function() {
    var Wheel0 = Blockly.Arduino.valueToCode(this, 'rpm_wheel0', Blockly.Arduino.ORDER_ATOMIC);
    var Wheel1 = Blockly.Arduino.valueToCode(this, 'rpm_wheel1', Blockly.Arduino.ORDER_ATOMIC);
    var Wheel2 = Blockly.Arduino.valueToCode(this, 'rpm_wheel2', Blockly.Arduino.ORDER_ATOMIC);
    var Wheel3 = Blockly.Arduino.valueToCode(this, 'rpm_wheel3', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'chs.Move('+Wheel0+','+Wheel1+','+Wheel2+','+Wheel3+');\n';
    return code;
};

Blockly.Arduino.forBlock.chassis_servos = function() {
    var dropdown_id = this.getFieldValue('servo_id');
    var duty_cycle = Blockly.Arduino.valueToCode(this, 'servo_dc', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'chs.SetServosDutyCycle('+dropdown_id+','+duty_cycle+');\n';
    return code;
};

Blockly.Arduino.forBlock.led_init = function() {
    var task = 'led';
    var core = 0;
    var value_length = 1024;
    var loop_code = 'void task_' +task+ '( void * pvParameters ){\n  FastLED.addLeds<WS2812B, 10, RGB>(LED, 1);\n  for(;;){\n    FastLED.show();\n    vTaskDelay(10);\n  }\n}\n';

    Blockly.Arduino.definitions_['include_led'] = '#include <FastLED.h>';
    Blockly.Arduino.definitions_['var_declare_led'] = `CRGB LED[1];`;
    Blockly.Arduino.definitions_['esp32_task_'+task] = loop_code;
    Blockly.Arduino.setups_['setups_esp32_task_'+task] = 'xTaskCreatePinnedToCore(task_' +task+ ', "task_' +task+ '", '+value_length+', NULL, 1, NULL, '+core+');';
    return '';
};

Blockly.Arduino.forBlock.led_set_color = function() {
    var rgb_r = Blockly.Arduino.valueToCode(this, 'led_r', Blockly.Arduino.ORDER_ATOMIC);
    var rgb_g = Blockly.Arduino.valueToCode(this, 'led_g', Blockly.Arduino.ORDER_ATOMIC);
    var rgb_b = Blockly.Arduino.valueToCode(this, 'led_b', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'LED[0] = CRGB('+rgb_r+','+rgb_g+','+rgb_b+');\n';
    return code;
};
