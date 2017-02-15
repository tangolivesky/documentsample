

require(['module/module1.js','module/module2.js'], function (module1,module2){

    module1.hello();
    module2.hello();

});

console.log("app.js");
