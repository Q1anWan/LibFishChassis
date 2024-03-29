﻿/*
 * @Description: 简体中文文字
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-20 01:07:40
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');

    const { ZhHans } = Blockly.Lang;

    ZhHans.CHASSIS_INIT = '初始化底盘控制器'
    ZhHans.CHASSIS_INIT_AUTOREEN_MOTORS = '电机自动使能'
    ZhHans.CHASSIS_INIT_AUTOREEN_PWM = ' PWM自动使能'
    
    ZhHans.CHASSIS_SET_MOTORS_STATUS = '底盘电机控制'
    ZhHans.CHASSIS_SET_PWM_STATUS = '底盘PWM控制'

    ZhHans.CHASSIS_CHECK_CN = '底盘连接状态'
    
    ZhHans.CHASSIS_MOVE = '设置电机转速(rpm)'
    ZhHans.CHASSIS_GET_VEL = '底盘速度'

    ZhHans.CHASSIS_MOVE_EXTERN_MOTOR = '设置额外电机转速(rpm)'    
    ZhHans.CHASSIS_GET_EXTERN_MOTOR_VEL = '获取额外电机转速(rpm)'

    ZhHans.CHASSIS_GET_INS = '航向角(°)'
    ZhHans.CHASSIS_RST_INS = '重置航向角'
    
    ZhHans.CHASSIS_SERVOS = '设置PWM生成'
    ZhHans.CHASSIS_SERVOS_DC = '比较值:'

    ZhHans.CHASSIS_RMT_CHECK_CN = '遥控器连接状态'
    ZhHans.CHASSIS_RMT_READ = '读取遥控器通道: '

    ZhHans.LED_INIT = '初始化LED'
    ZhHans.LED_SET_COLOR = '设置LED颜色'
    
})();