/*
 * @Description: English discribution
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-24 23:25:26
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');
    const { En } = Blockly.Lang;

    En.CHASSIS_INIT = 'Init chassis controller'
    En.CHASSIS_INIT_AUTOREEN_MOTORS = 'Motors automatically enable'
    En.CHASSIS_INIT_AUTOREEN_PWM = ' PWM automatically enable'

    En.CHASSIS_SET_MOTORS_STATUS = 'Chassis motors status'
    En.CHASSIS_SET_PWM_STATUS = 'Chassis PWM status'
    En.CHASSIS_CHECK_CN = 'Chassis communication status'

    En.CHASSIS_MOVE = 'Set motors speed(rpm)'
    En.CHASSIS_MOVE_EXTERN_MOTOR = 'Set external motors speed(rpm)'

    En.CHASSIS_GET_VEL = 'Chassis velocity'
    
    En.CHASSIS_GET_EXTERN_MOTOR_VEL = 'Get external motor velocity'

    En.CHASSIS_GET_INS = 'Heading angle (°)'
    En.CHASSIS_RST_INS = 'Reset heading angle'

    En.CHASSIS_SERVOS = 'Set PWM generation'
    En.CHASSIS_SERVOS_DC = 'Compare value:'

    En.CHASSIS_RMT_CHECK_CN = 'Remoter communication status'
    En.CHASSIS_RMT_READ = 'Read remoter information: '

    En.LED_INIT = 'Init LED'
    En.LED_SET_COLOR = 'Set LED color'

})();