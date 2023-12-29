/*
 * @Description: English discribution
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2023-12-29 17:43:23
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');
    const { En } = Blockly.Lang;

    En.CHASSIS_INIT = 'Init chassis'
    En.CHASSIS_INIT_AUTOREEN = 'Auto enable'

    En.CHASSIS_STATUS = 'Chassis status'
    En.CHASSIS_CHECK_STATUS = 'Chassis connection status'

    En.CHASSIS_MOVE = 'Set wheel motors speed (rpm)'
    En.CHASSIS_GET_VEL = 'Chassis velocity'
    En.CHASSIS_GET_INS = 'Heading angle (°)'
    En.CHASSIS_RST_INS = 'Reset heading angle'

    En.CHASSIS_SERVOS = 'Set PWM generation'
    En.CHASSIS_SERVOS_DC = 'Compare value:'

})();