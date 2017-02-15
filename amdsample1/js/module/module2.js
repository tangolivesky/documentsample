define(['http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js'], function(jquery) {


    $("#module2").html("requireJS");

    console.log('module2.js');

    var hello = function(){
        console.log('hello2');
    };

    var goodbye = function(){
        console.log('goodbye2');
    };

    return {
        hello: hello ,
        goodbye: goodbye
    };
});