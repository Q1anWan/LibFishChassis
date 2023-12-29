'use strict';

goog.provide('Blockly.Arduino.base');
goog.require('Blockly.Arduino');
goog.require('Mixly.JSFuncs');


Blockly.Arduino.forBlock.chassis_init = function() {
    var task = 'chs';
    var core = 0;
    var value_length = 1024;
    var auto_en = this.getFieldValue('init_reen');
    var loop_code;
    if(auto_en=="On"){
        loop_code = 'void task_' +task+ '( void * pvParameters ){\n  chs.Init();\n  for(;;){\n    if(chs.Update()){\n      chs.Unlock();\n    }\n    vTaskDelay(10);\n  }\n}\n';
    }
    else{
        loop_code = 'void task_' +task+ '( void * pvParameters ){\n  chs.Init();\n  for(;;){\n    chs.Update();\n    vTaskDelay(10);\n  }\n}\n';
    }
    Blockly.Arduino.definitions_['include_chassis'] = '#include <Chassis.h>';
    Blockly.Arduino.definitions_['var_declare_chs'] = `Chassis chs;`;
    Blockly.Arduino.definitions_['esp32_task_'+task] = loop_code;
    Blockly.Arduino.setups_['setups_esp32_task_'+task] = ' \n  xTaskCreatePinnedToCore(task_' +task+ ', "task_' +task+ '", '+value_length+', NULL, 2, NULL, '+core+');\n';
    return '';
};

Blockly.Arduino.forBlock.chassis_check_status = function() {
    var code = 'chs.IsOnline()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.chassis_status = function() {
    var enable = this.getFieldValue('chs_en');
    var code;
    if(enable=="Enable"){
        code = 'chs.Unlock();\n';
    }
    else{
        code = 'chs.Lock();\n';
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
