# html知识点
> <!Doctype>标签的作用

* 声明在html文件第一行，处于标签之前。用来告知浏览器的解析器用什么文档标准来解析这个文档。DOCTYPE不存在会导致文档兼容模式呈现“(怪异模式)”
* 标准模式： 排版和js运行都是以该浏览器最高标准运行
* 兼容模式： 页面以宽松的向后兼容方式显示，模拟老浏览器的行为防止站点无法运行
* 在严格模式中，width是内容宽度，但是在兼容模式下width是元素的实际宽度 “（怪异盒模型margin之外是width范围）”
* html5为神马只需要写<!doctype>: html5不基于SGML，因此不需要对DTD进行引用

> html常见的块元素盒行内元素

* 块元素： div、ul、li、 p、h1～h6
* 行内元素：a、b、span、img、input、strong、em、select
* 行内块元素： display: inline-block;
* 块元素转为行内元素： display: inline;
* 行内元素转为块元素： display: block;

> 页面引入样式，link和@import区别

* 写法上的区别

```
// link写法
<link rel="stylesheet" href="路径" >
// @import
<style>
	@import '路径'
</style>
```
* 解析上的区别： link和页面同时加载， @import在页面加载完后加载
* 兼容区别: @import IE5上才能识别， link无限制