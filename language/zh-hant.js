/*
 * @Description: 简体繁体文字
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-20 01:30:11
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');

    const { ZhHant } = Blockly.Lang;
    
    ZhHant.CHASSIS_INIT = '初始化底盤控制器'    
    ZhHant.CHASSIS_INIT_AUTOREEN_MOTORS = '馬達自動啟用'
    ZhHant.CHASSIS_INIT_AUTOREEN_PWM = ' PWM自動啟用'
    
    ZhHant.CHASSIS_SET_MOTORS_STATUS = '底盤馬達控制'
    ZhHant.CHASSIS_SET_PWM_STATUS = '底盤PWM控制'
    ZhHant.CHASSIS_CHECK_CN = '底盤連接狀態'
    
    ZhHant.CHASSIS_MOVE = '設定馬達轉速(rpm)'
    ZhHant.CHASSIS_GET_VEL = '底盤速度'
    ZhHant.CHASSIS_GET_INS = '航向角(°)'
    ZhHant.CHASSIS_RST_INS = '重置航向角'
    
    ZhHant.CHASSIS_SERVOS = '設定PWM產生'
    ZhHant.CHASSIS_SERVOS_DC = '比較值:'

    ZhHant.CHASSIS_RMT_CHECK_CN = '遙控器連線狀態'
    ZhHant.CHASSIS_RMT_READ = '讀取遙控器通道: '

    ZhHant.LED_INIT = '初始化LED'
    ZhHant.LED_SET_COLOR = '設定LED顏色'
})();