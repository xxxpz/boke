# 实现一个Array.flat

>Array.flat可以将一个多维数组扁平化

```js
var arr = [1,[8, 5], [6, 4, 8, [8, 3, [5, 9]]]];
arr.flat(); // [1, 8, 5, 6, 4, 8, [8, 3, [5, 9]]]
// 没有传值的情况下，flat只会将第一层扁平化
arr.flat(2) // // [1, 8, 5, 6, 4, 8, 8, 3, [5, 9]];
arr.flat(Infinity) // [1, 8, 5, 6, 4, 8, 8, 3, 5, 9];
// 输入Infinity 将所有的都扁平化


Array.flat = function(arr, depch) {
  let reg = []
  	depchAry = depch || 1;
  	depchNum = 0;
  	flatMap = (arr) => {
      arr.map((item, index) => {
        if(Object.prototype.toString.call(item).slice(8, -1) === 'Array'){
            if(depthNum < depthArg){
                depthNum++;
                flatMap(item);
            }else{
                res.push(item);
            }
        }else{
            res.push(item);
            if(index === array.length -1) depthNum = 0;
        }
      })
    }
    flatMap(arr)
}


```

