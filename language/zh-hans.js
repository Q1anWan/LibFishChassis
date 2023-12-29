/*
 * @Description: 简体中文文字
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2023-12-29 17:40:35
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');

    const { ZhHans } = Blockly.Lang;

    ZhHans.CHASSIS_INIT = '初始化底盘'
    ZhHans.CHASSIS_INIT_AUTOREEN = '自动使能' 
    
    ZhHans.CHASSIS_STATUS = '底盘控制'
    ZhHans.CHASSIS_CHECK_STATUS = '底盘连接状态'
    
    ZhHans.CHASSIS_MOVE = '设置轮电机转速(rpm)'
    ZhHans.CHASSIS_GET_VEL = '底盘速度'
    ZhHans.CHASSIS_GET_INS = '航向角(°)'
    ZhHans.CHASSIS_RST_INS = '重置航向角'
    
    ZhHans.CHASSIS_SERVOS = '设置PWM生成'
    ZhHans.CHASSIS_SERVOS_DC = '比较值:'
    
})();