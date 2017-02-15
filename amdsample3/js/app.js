

require(['js/module/module1.js','js/module/module2.js'], function (module1,module2){
    module1.hello();
    module2.goodbye();

});

require(['js/module/nav.js', "text!../view/nav.html"], function (nav, navHtml){
    $('#m-nav').html(navHtml);
    nav.create();
});
