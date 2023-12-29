/*
 * @Description: 简体繁体文字
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2023-12-29 17:40:41
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');

    const { ZhHant } = Blockly.Lang;
    
    ZhHant.CHASSIS_INIT = '初始化底盤'
    ZhHant.CHASSIS_INIT_AUTOREEN = '自動啟用'
    
    ZhHant.CHASSIS_STATUS = '底盤控制'
    ZhHant.CHASSIS_CHECK_STATUS = '底盤連線狀態'
    
    ZhHant.CHASSIS_MOVE = '設定輪馬達轉速(rpm)'
    ZhHant.CHASSIS_GET_VEL = '底盤速度'
    ZhHant.CHASSIS_GET_INS = '航向角(°)'
    ZhHant.CHASSIS_RST_INS = '重置航向角'
    
    ZhHant.CHASSIS_SERVOS = '設定PWM產生'
    ZhHant.CHASSIS_SERVOS_DC = '比較值:'
})();