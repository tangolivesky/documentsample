define(['jquery'], function($) {

    $("#module2").html("requireJS");

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