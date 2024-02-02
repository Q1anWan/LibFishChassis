'use strict';

goog.provide('Blockly.Blocks.base');
goog.require('Blockly.Blocks');

const { Config, Editor } = Mixly;

Blockly.Msg['CHASSIS_HUE'] = 20;
Blockly.Msg['LED_HUE'] = 60;

Blockly.Blocks.chassis_init = {
    init: function () {
        var AUTOREEN =
            [["ON", "On"],
            ["OFF", "Off"]
            ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_INIT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_INIT_AUTOREEN_MOTORS)
            .appendField(new Blockly.FieldDropdown(AUTOREEN), 'init_reen_motors')
            .appendField(Blockly.Msg.CHASSIS_INIT_AUTOREEN_PWM)
            .appendField(new Blockly.FieldDropdown(AUTOREEN), 'init_reen_pwm');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_check_cn = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_CHECK_CN);
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_set_motors_status = {
    init: function () {
        var ENABLELIST =
        [["Enable", "Enable"],
        ["Disable", "Disable"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_SET_MOTORS_STATUS)
            .appendField(new Blockly.FieldDropdown(ENABLELIST), 'chs_en_motors');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_set_pwm_status = {
    init: function () {
        var ENABLELIST =
        [["Enable", "Enable"],
        ["Disable", "Disable"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_SET_PWM_STATUS)
            .appendField(new Blockly.FieldDropdown(ENABLELIST), 'chs_en_pwm');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_rst_ins = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_RST_INS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_get_ins = {
    init: function () {
        var DIRECTION =
            [["Yaw", "0"],
            ["Pitch", "1"],
            ["Roll", "2"]
            ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_GET_INS)
            .appendField(new Blockly.FieldDropdown(DIRECTION), 'ins_type');
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};


Blockly.Blocks.chassis_get_vel = {
    init: function () {
        var VELDIRECTION =
            [["x (m/s)", "0"],
            ["y (m/s)", "1"],
            ["w (°/s)", "2"]
            ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_GET_VEL)
            .appendField(new Blockly.FieldDropdown(VELDIRECTION), 'vel_type');
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_get_extern_motor_rpm = {
    init: function () {
        var VELDIRECTION_EXTERN =
            [["4", "4"],
            ["5", "5"]
            ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_GET_EXTERN_MOTOR_VEL)
            .appendField(new Blockly.FieldDropdown(VELDIRECTION_EXTERN), 'vel_extern_type');
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_move = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_MOVE);
        this.appendValueInput("rpm_wheel0", Number)
            .setCheck(Number)
            .appendField("0:");
        this.appendValueInput("rpm_wheel1", Number)
            .setCheck(Number)
            .appendField("1:");
        this.appendValueInput("rpm_wheel2", Number)
            .setCheck(Number)
            .appendField("2:");
        this.appendValueInput("rpm_wheel3", Number)
            .setCheck(Number)
            .appendField("3:");
        this.setPreviousStatement(true);
        this.setNextStatement(true, null);
        this.setInputsInline(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_move_extern_motor = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_MOVE_EXTERN_MOTOR);
        this.appendValueInput("rpm_wheel4", Number)
            .setCheck(Number)
            .appendField("4:");
        this.appendValueInput("rpm_wheel5", Number)
            .setCheck(Number)
            .appendField("5:");
        this.setPreviousStatement(true);
        this.setNextStatement(true, null);
        this.setInputsInline(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_servos = {
    init: function () {
        var SERVO_ID =
            [["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"]
            ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_SERVOS);
        this.appendDummyInput()
            .appendField("ID:")
            .appendField(new Blockly.FieldDropdown(SERVO_ID), 'servo_id');
        this.appendValueInput("servo_dc", Number)
            .setCheck(Number)
            .appendField(Blockly.Msg.CHASSIS_SERVOS_DC);
        this.setPreviousStatement(true);
        this.setNextStatement(true, null);
        this.setInputsInline(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_remoter_check_cn = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_RMT_CHECK_CN);
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_remoter_read = {
    init: function () {
        var RMT_ID =
            [["CH0", "0"],
            ["CH1", "1"],
            ["CH2", "2"],
            ["CH3", "3"],
            ["WHEEL", "4"],
            ["SW_L", "5"],
            ["SW_R", "6"]
            ];    
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_RMT_READ)
            .appendField(new Blockly.FieldDropdown(RMT_ID), 'rmt_id');
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.led_init = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LED_INIT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['LED_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.led_set_color = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LED_SET_COLOR);
        this.appendValueInput("led_r", Number)
            .setCheck(Number)
            .appendField("R:");
        this.appendValueInput("led_g", Number)
            .setCheck(Number)
            .appendField("G:");
        this.appendValueInput("led_b", Number)
            .setCheck(Number)
            .appendField("B:");
        this.setPreviousStatement(true);
        this.setNextStatement(true, null);
        this.setInputsInline(true, null);
        this.setColour(Blockly.Msg['LED_HUE']);
        this.setTooltip("");
    }
};