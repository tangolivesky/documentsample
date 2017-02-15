define(['jquery'], function($) {

    var init = function () {
        $(".myNav").html("我是一个导航");

        //可以进行ajax数据请求，获取导航菜单数据
        //进行导航菜单的构建
    };


    return{
        create:init
    }

});