# html5_spa_seed
## 前言：
+ 基于 Ajax 的 Web 应用最为明显的特征在于使用了浏览器内部原生支持的 XMLHttpRequest 对象与后台服务器进行数据通信，由于这种通信方式不需要页面的刷新动作，因而无论与后台发生了多少次通信，浏览器的 URL 会一直保持在初始地址不变。这随之而来的一个问题便是不断变化的页面状态信息无法记录到浏览器的历史记录堆栈中，从而使得用户无法通过浏览器的前进 / 后退按钮在不同状态页面间进行切换

## 兼容性：
+ 如果浏览器不兼容，需要引入history.js
## history.state
+ 当前URL下对应的状态信息。如果当前URL不是通过pushState或者replaceState产生的，那么history.state是null。
## 进栈 window.history.pushState()
+ 这是html5对于历史记录的拓展，拥有3个参数
     -  第一个参数是与要跳转到的URL对应的状态信息。
     -  第二个参数是document.title的值，一般设定为`null`，不知道干啥用，设置跟没设置一样，传空字符串就行了。
     -  第三个参数string，用以改变 当前url  
     -  我的理解就是第一个参数与第三个参数是一个键值对的形式{stateName : url} <---->{state.stateName , null ,state.url}
 
## 出栈 popstate
 + 当点击后退和前进按钮时触发
 + 可以从event对象获取相关的信息（event.state）
 
## licence
+ © 2018 Yciot,MrHZJ