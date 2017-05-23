$(document).ready(function() {

    var speed = 3000;
    var run = setInterval('rotate()', speed);


    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);


    $('#slides li:first').before($('#slides li:last'));

    $('#slides ul').css({'left' : left_value});


    $('#prev').click(function() {

        var left_indent = parseInt($('#slides ul').css('left')) + item_width;

        $('#slides ul').animate({'left' : left_indent}, 200,function(){

            $('#slides li:first').before($('#slides li:last'));

            $('#slides ul').css({'left' : left_value});

        });

        return false;

    });


    $('#next').click(function() {

        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        $('#slides ul').animate({'left' : left_indent}, 200, function () {

            $('#slides li:last').after($('#slides li:first'));

            $('#slides ul').css({'left' : left_value});

        });

        return false;

    });

    $('#slides').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', speed);
        }
    );

});

function rotate() {
    $('#next').click();
}