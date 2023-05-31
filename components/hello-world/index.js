// 引入组件
import HelloWorld from "./src/main.vue";
// 为组件添加 install 方法，在vue中调用 Vue.use(组件)
// 将自动调用组件的 install 方法注册组件
HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};
export default HelloWorld;
