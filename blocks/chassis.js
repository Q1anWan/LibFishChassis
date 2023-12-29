'use strict';

goog.provide('Blockly.Blocks.base');
goog.require('Blockly.Blocks');

const mediaDirPath = path.join(document.currentScript.src, '../../media/');
const { Config, Editor } = Mixly;
const SVG_PATH = mediaDirPath + "/compass.svg";

Blockly.Msg['CHASSIS_HUE'] = 20;//'#ae3838';//40;

Blockly.Blocks.chassis_init = {
    init: function () {
        var AUTOREEN =
            [["On", "On"],
            ["Off", "Off"]
            ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_INIT)
            .appendField(Blockly.Msg.CHASSIS_INIT_AUTOREEN)
            .appendField(new Blockly.FieldDropdown(AUTOREEN), 'init_reen');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_check_status = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_CHECK_STATUS);
        this.setOutput(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_status = {
    init: function () {
        var ENABLELIST =
        [["Enable", "Enable"],
        ["Disable", "Disable"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_STATUS)
            .appendField(new Blockly.FieldDropdown(ENABLELIST), 'chs_en');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Msg['CHASSIS_HUE']);
        this.setTooltip("");
    }
};

Blockly.Blocks.chassis_unlock = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHASSIS_UNLOCK);
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
