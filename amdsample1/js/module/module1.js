define([], function() {

    console.log('module1.js');

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