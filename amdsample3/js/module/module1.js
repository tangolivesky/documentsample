define(['jquery'], function($) {

    $("#module1").html("AMD");

    var hello = function(){
        console.log('hello');
    };

    var goodbye = function(){
        console.log('goodbye');
    };

    return {
        hello: hello ,
        goodbye: goodbye
    };
});