/*
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-29 12:12:38
 * @FilePath: \jungehousing\src\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n'
import enLocale from './language-EN'
import usLocal from './language-CN'
import koLocal from './language-KO'
Vue.use(VueI18n);
const messages = {
    en: {
        ...enLocale
    },
    cn: {
        ...usLocal
    },
    ko: {
        ...koLocal
    }
}
console.log(localStorage.getItem('lang'));
const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'cn', // 通过this.$i18n.locale的值实现语言切换,默认中文
    messages,
});
 
export default i18n;
