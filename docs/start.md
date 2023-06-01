# Install

使用如下命令进行安装：

```
npm install vue2-breeze
```

# Use

在`main.js`文件中按如下方式进行引用：

```js
import breeze from "vue2-breeze";
import "vue2-breeze/dist/breeze.css"; // 全局引入样式

Vue.use(breeze);
```

若想按需引入，以水印组件为例，可按如下方式进行引用：

```js
import watermark from "vue2-breeze/components/watermark";

Vue.use(watermark);
```
