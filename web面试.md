##盒子模型
```css
标准盒模型：
    元素的宽度等于style里的width+margin+border+padding宽度
如下代码，宽高120px
div{
  box-sizing:content-box;
  margin: 10px;
  width: 100px;
  height: 100px;
  padding: 10px;
}
怪异盒模型：
    元素宽度等于style里的width宽度
如下代码，宽高100px
div{
  box-sizing:border-box;
  margin: 10px;
  width: 100px;
  height: 100px;
  padding: 10px;
}
```
###rem与em的区别
>rem是根据根的font-size变化，而em时根据父级的font-size变化

    rem:如果html为font-zize:12px,那么在其当中的div设置为font-size:2rem时，其font-size为24px
    em:如果p元素为font-size:12px，在他内部有个span标签，其设置为font-size:2em，那么他大小为24px
```
   通配符：*
   ID选择器：#ID
   类选择器：.class
   元素选择器：p、a等
   后代选择器：p span div a等
   伪类选择器：a:hover等
   属性选择器：input[type="text"]等 
```
###css选择器权重
!important -> 行内样式 -> #id -> .class -> 元素和伪类 -> * -> 继承 -> 默认
###css新特性
```css
div{
  transition:过度;
  transform:旋转,缩放,移动或倾斜;
  animation: 动画;
  gradient:渐变;
  shadow: 阴影;
  border-radius:圆角;
}
```
###行内元素和块级元素
行内元素：(display:inline)
>宽度高度有内容决定，与其他元素共占一行的元素

例如:span,i,a等

块级元素：(display:block)
>默认宽度有父容器决定，默认高度有内容决定，独占一行且可以设置宽高

例如：div,ul,p等

**display：inline-block，使其拥有更多的状态**
###绝对定位和相对定位的区别
```css
div{
  position:absolute;
  绝对定位:相对于元素最近的已定位的祖先元素;
  position:relative;
  相对定位:相对定位时相对于元素在文档中初始位置;
}
```
#Flex布局
**基本概念**
>他的所有子元素自动成为容器元素，简称“项目”
>
>默认存在两根轴：水平主轴(main axis)和垂直交叉轴(cross axis)
>
>主轴排列方式：从左到右；交叉轴排列方式：从上到下；

*flex-direction：属性决定主轴方向*
```css
ul{
  display: flex;
  flex-direction: row;(主轴水平方向，起点在左端)
}
```
```css
ul{
  display: flex;
  flex-direction:row-reverse;(主轴水平方向，起点在右端)
}
```
```css
ul{
  display: flex;
  flex-direction: column;(主轴垂直方向，起点在上沿)
}
```
```css
ul{
  display: flex;
  flex-direction: column-reverse;(主轴垂直方向，起点在下沿)
}
```
*flex-wrap:默认情况下，项目都排在一条线上（又称“轴线”上）*
```css
ul{
  display: flex;
  flex-wrap: nowrap;(不换行，默认的)
}
```
```css
ul{
  display: flex;
  flex-wrap: wrap;(换行，第一行在上面)
}
```
```css
ul{
  display: flex;
  flex-wrap: wrap-reverse;(换行，第一行在下面)
}
```
##**flex-flow:是flex-direction属性和flex-wrap属性的简写，默认值row、nowrap**
*justify-content:属性定义了项目在主轴上的对齐方式*
```css
ul{
  display: flex;
  justify-content: flex-start;(左对齐，默认值)
}
```
```css
ul{
  display: flex;
  justify-content: flex-end;(右对齐)
}
```
```css
ul{
  display: flex;
  justify-content: center;(居中)
}
```
```css
ul{
  display: flex;
  justify-content: space-between;(两端对齐，项目之间的间隔相等)
}
```
```css
ul{
  display: flex;
  justify-content: space-around;(每个项目两侧的间距相等)
}
```
*align-items:定义项目交叉轴上如何对齐（单行）*
```css
ul{
  display: flex;
  align-items: flex-start;(交叉轴起点对齐)
}
```
```css
ul{
  display: flex;
  align-items: flex-end;(交叉轴终点对齐)
}
```
```css
ul{
  display: flex;
  align-items: center;(垂直方向，中间开始)
}
```
```css
ul{
  display: flex;
  align-items: baseline;(项目第一行文字的基线对齐)
}
```
```css
ul{
  display: flex;
  align-items: stretch;(默认值，如果项目未设置高度或设为auto，将占满整个容器的高度)
}
```
###align-content：多行轴线对齐（用法同align-items）

###**flex项目属性**
**1.order定义项目排列顺序**
```css
li:nth-child(1){order: 2}
li:nth-child(2){order: 3}
li:nth-child(3){order: 1}(order的数值越小，越排在前，默认为0)
```
**2.flex-grow定义项目放大比例**
```css
li:nth-child(1){flex-grow: 1;}
li:nth-child(2){flex-grow: 2;}
li:nth-child(3){flex-grow: 0;}
(当flex项目的总宽度小于flex容器的宽度时，flex-grow属性决定了是否放大撑满容器)
(默认值为0，如果有剩余空间也不放大，值为1放大，2是1的两倍，此类推)
```
**3.flex-shrink定义项目缩小比例**
```css
li:nth-child(1){flex-shrink: 0;}
li:nth-child(2){flex-shrink: 1;}
li:nth-child(3){flex-shrink: 3;}
(当flex项目的总宽度大于flex容器的宽度时，flex-shrink属性可以缩小项目的宽度)
(为0时，不缩放；数值越大，缩放比例越大)
```
**4.flex-basis定义项目自身大小**
```css
li:nth-child(1){flex-basis: 100px;}
li:nth-child(2){flex-basis: 50%;}
li:nth-child(3){flex-basis: auto;}
(默认auto，可设置固定的值50px/50%)
```
**5.flex:属性时flex-grow,flex-shrink,flex-basis的缩写，默认值为0、1、auto**
**6.align-self项目自身对齐**
>align-self:auto|flex-start|flex-end|center|baseline|stretch
```css
li:nth-child(1){align-self: auto}
li:nth-child(2){align-self: center}
li:nth-child(3){align-self: flex-end}
li:nth-child(4){align-self: flex-start}

(align-self属性决定了flex项目中单个项目的排列方式)
(auto时，和flex容器的align-items属性的排列方式一致)
(center时，垂直方向居中排列)
(flex-end时，垂直方向下面排列)
(flex-start时，垂直方向上面排列)
```

