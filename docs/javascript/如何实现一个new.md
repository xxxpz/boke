# 如何实现一个new

>new的作用

```js
var Dog = function(name) {
  this.name = name;
}
Dog.prototype.getName = function () {
  console.log(this.name)
}
Dog.prototype.age = 10;

var Dogs = new Dog('泰迪')；

Dogs.getName(); // '泰迪'

// 实现一个new，先要了解new的作用
// new 创建一个新的对象 obj
// 把obj的 _proto_ 指向Dog.prototype实现继承
// 将this指向obj
// return 对象

/**
 * @param {Function} fn
 */

function _new(fn, arg) {
  var obj = Object.create(fn.prototype);
  var ref = fn.apply(obj, arg);
  return ref instanceof Object ? ref : obj
}

```



