import Vue from 'vue'

function capFirstLetter(str) {
	// 组件首字母大写，统一注册时组件的首字母大写
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// 我们需要借助一下神器webpack，使用 require.context() 方法来创建自己的（模块）上下文，
// 从而实现自动动态require组件。
// 这个方法需要3个参数：要搜索的文件夹目录，是否还应该搜索它的子目录，以及一个匹配文件的正则表达式。
const requireComponent = require.context('.', false, /\.vue$/);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    // 得到文件名是./xxx.vue的根式，为了得到真正的文件名称，我们需要去除头和尾巴
    const componentName = capFirstLetter(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''));
    Vue.component(componentName, componentConfig.default || componentConfig);
});