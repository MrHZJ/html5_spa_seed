/**
 * Created by zhijun on 2018/4/3.
 */
(function(window,data){
    'use strict';
    /*
    * @param {JsonObject} show 展示对象
    */
    var show = {};
    /**
     * 渲染数据
     * @param {JsonObject} show.data  展示数据
     * @param {Dom} oul 列表  
     * @param {Dom#Array} ali 列表记录  
     * @param {Dom} ocontent  内容盒子
     * @param {JsonObject} data  具体内容
     */
    show.data = {
        oul : window.document.querySelector("#ul"),
        ocontent : window.document.querySelector("#content"),
        ali :window.document.getElementsByTagName("li"), //getElementBy是动态获取，querySelector是静态获取
        data : data
    };
    /**
     *  展示行为
     * @param {JsonObject} show.action  展示行为
     * @param {fn} init 行为初始化
     * @param {fn} showCont 初始化列表
     * @param {fn} showDetail 点击列表按钮入栈行为 
     * @param {fn}  bgColor_kv 当前栈记录按钮行为
     * @param {fn}  bgColor_only 当前栈记录按钮换色行为
     */
    show.action = {
        init : function(){
            show.data.ocontent.innerHTML = data['view1'];
            this.showCont();
        },
        showCont : function(){
            var str = '';
            for(var i in data){
                str += "<li data-key="+i+">"+i+"</li>";
            }
            show.data.oul.innerHTML = str;

            this.showDetail();
        },
        showDetail : function(){
            for(var j = 0;j < show.data.ali.length; j++){
                var item = show.data.ali[j];
                item.n = j;
                var that = this;
                item.addEventListener('click',function(){
                    that.bgColor_only(this.n);
    
                    var key = show.data.ali[this.n].dataset.key;
                    show.data.ocontent.innerHTML = data[key];
    
                    if( window.history && window.history.pushState){
                        window.history.pushState(key,'','#/title='+key);//向历史记录栈储存记录
                    }else {
                        alert("不支持history,请你升级浏览器");
                    }
    
                })
            }
        },
        /*根据设置属性与值判断颜色*/
        bgColor_kv : function(key,value){
            for(var i = 0;i < show.data.ali.length ;i++){
                var item = show.data.ali[i];
                if(item.dataset[key] === value){
                    item.style.backgroundColor = '#eee';
                }else {
                    item.style.backgroundColor = '#fff';
                }
            }
        },

        /*只有一个有背景颜色*/
        bgColor_only : function(n){
            for(var k = 0; k < show.data.ali.length ; k++){
                var item = show.data.ali[k];
                item.style.backgroundColor = "#fff";
            }
            show.data.ali[n].style.backgroundColor = "#eee";
        }
    };
    //初始化
    show.action.init();
    
    /*
    * @param {fn}  popstate 出栈行为
    */
    /*后退或者前进*/
    window.addEventListener("popstate",function(e){//历史记录出栈
        if(e.state == null){//可以从event对象拿到出栈记录
            show.data.ocontent.innerHTML = data["view1"];
            show.action.bgColor_only(0);
        }else{
            show.data.ocontent.innerHTML = data[e.state];//对应的内容变化
            show.action.bgColor_kv("key", e.state);//对应的按钮变色
        }
    });
})(window,data);
