# 介绍

在页面上添加特定的文字作为水印，可用于防止信息盗用。组件使用 web api`MutationObserver`对水印 dom 节点进行监控，有效防止随意篡改或删除水印。

# 演示

```html
<watermark>
  <p style="height:300px; line-height:300px">hello breeze!</p>
</watermark>
```

<div id="app" style="margin:0">
<watermark>
<p style="height:300px; line-height:300px">hello breeze!</p>
</watermark>
</div>
<script>
  var app = new Vue({
    el: '#app',
  })
</script>

# API

## Props

| 参数         | 说明                                               | 类型   | 默认值            |
| ------------ | -------------------------------------------------- | ------ | ----------------- |
| textList     | 水印文字内容，支持多行文字，多行文字以数组形式传入 | array  | ["hellobreeze"]   |
| textBaseline | 文字基线                                           | string | "Middle"          |
| textAlign    | 文字对齐方式                                       | string | "left"            |
| fontSize     | 文字大小                                           | number | 12                |
| fontColor    | 文字颜色                                           | string | "rgba(0,0,0,0.2)" |
| lineSpace    | 多行文字行间距                                     | number | 1.2               |
| canWidth     | 单个水印画布宽度                                   | number | 195               |
| canHeight    | 单个水印画布高度                                   | number | 100               |
| adjustScale  | 调整文字在画布的占位比例，范围是 0-1               | number | 0.8               |
