define(['jquery'], function($) {

    $("#module1").html("AMD");

    var hello = function(){
        console.log('hello');
        
        require(['js/lib/jquery.fullpage.js'], function(){
            $(document).ready(function() {
                $('#fullpage').fullpage();
            });
        });
    };

    var goodbye = function(){
        console.log('goodbye');
    };

    return {
        hello: hello ,
        goodbye: goodbye
    };
});