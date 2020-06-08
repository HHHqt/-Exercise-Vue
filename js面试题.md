**1.JS中let和const有什么用**  
>const：创建不可变的变量。程序整个生命周期中永不改变的变量  
>let：创建可变变量，可以任意次数的更改

**2.JS中主要几类错误**
>加载时错误：加载web页面时出现的错误（如语法错误），它会动态生成错误  
>
>运行时错误：由于滥用HTML语言中的命令而导致的错误  
>
>逻辑错误：这些错误是由于对具体不同操作的函数执行了错误的逻辑而导致的  

**3.如何通过类别名获取dom元素**
>在JS中使用document.getElementsByClassName()方法来获取具有类名的元素  

**4.JS的作用域链是什么及其作用**
>一般情况下，变脸取值到创建这个变量的函数的作用域中取值。如果在当前作用域没有查到值，就会向上级作用域去查，直到查到全局作用域，这么查找的过程形成的链条就叫做作用域链

**5.解释JS中MUL函数**
>MUL表示数的简单乘法。  
>将一个值作为参数传递给一个函数，而该函数将返回另一个函数，将第二个值传递给该函数，然后重复继续。  
>例如x乘y乘z可以表示为

```javascript
function mul(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    }
  }
}
```
**6.用纯JS编写一个程序来反转字符串**
>使用内置函数：reverse()直接反转字符串  
>首先将字符串拆分为数组，然后反转数组，最后将字符连接起来形成字符串
```js
str = 'jquery';
str = str.split('');
str = str.reverse();
str = str.join('');
alert(str);
```
**7.JS中如何将页面重定到另一个页面**
>1.使用location.href:  
>window.location.href="https://www.onlineinnterviewquestions.com/"  
>2.使用location.replace:  
>window.location.replace("https://www.onlineinterviewquestions.com/;");

**8.JS中的一些设计模式**
>创建模式：该模式抽象了对象实例化过程  
>结构型模式：这些模式处理不同的类和对象以提供新功能  
>行为模式：定义了一个被观察者和多个观察者的、一对多的对象关系  
>并行设计模式：处理多线程编程范例  
>架构设计模式：用于处理架构设计

**9.JS中Array.splice()和Array.slice方法区别**
```js
var arr=[0,1,2,3,4,5,6,7,8,9];//设置一个数组
console.log(arr.slice(2,7));//输出2,3,4,5,6
console.log(arr.splice(2,7));//输出2,3,4,5,6,7,8

//slice(start,end)第一个参数表示开始位置，第二个表示截取到的位置（不包含该位置）
//splice(start,length)第一个参数表示开始位置，第二个参数为截取长度
```
```js
var arr=[0,1,2,3,4,5,6,7,8,9];
console.log(arr.slice(2,5));
console.log(arr);//输出原数组，并未改变
console.log(arr.splice(2,5));//2,3,4,5,6
console.log(arr);//[0,1,7,8,9]原数组中的数值被剔除掉了
```
>slice和splice第一个参数都是截取开始位置  
>slice第二个参数是截取结束位置（不包含），并且对原数组不改变  
>splice第二个参数表示（从开始位置截取的长度），并且会直接剔除原数组中截取的数据

**10.JS中动态添加/删除对象的属性**
>使用object.property_name = value向对象添加属性  
>使用delete object.property_name用于删除属性
```js
let user = new Object();
//添加
user.name = 'Anil';
user.age = 25;
console.log(user);
//删除
delete user.age;
console.log(user);
```
**11.什么是promise**
>promise是JS中的一个对象，用于生成可能在将来产生结果的值。  
>
>值可以是已解析的值，也可以是说明为什么未解析该值的原因  
>
>promise的三种状态：    
>
>pending：初始状态，既不成功也不失败；  
>fulfilled：意味着操作完全成功；  
>rejected：意味着操作失败  

**12.数组去重的方法**  

1.使用set
```js
function uniquearry(array) {
  let unique_array = Array.from(set(array)) return unique_array;
}
```
2.使用filter
```js
function unque_array (arr) {
  let unique_array = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  })
  return unique_array;
}

 console.log(unique_array(array_with_duplicates));
```
3.使用for循环
```js
Array dups_names = ['Ron', 'Pal', 'Fred', 'Rongo', 'Ron'];
function dups_array(dups_names) {
 let unique = {};
 names.forEach(function(i) {
    If (!unique[i]) {
      unique[i] = true;    }
  });
return Object.keys(unique);}   // Ron, Pal, Fred, Rongo
Dups_array(names);
```
**13.undefined,null和undeclared区别**
>1.null表示“没有对象”，该处不应该有值，转为数值0。（作为函数的传参表示该函数的参数不是对象，作为对象原型链的终点）  
>
>2.undefined表示缺少值，此处应该有一个值，但未定义，转为数值NaN  
>
>3.undeclared：JS语法错误，没有申明直接使用，JS无法招到对应的上下文

**14.JS中数据类型**
>undefined,null,boolean,number,symbol,string和object

**15.JS中每x秒调用一个函数**
```js
setInterval(function() {
  alert("Hello");
},3000);
```
