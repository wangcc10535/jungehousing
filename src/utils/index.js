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
const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'cn', // 通过this.$i18n.locale的值实现语言切换,默认中文
    messages,
});
 
export default i18n;
