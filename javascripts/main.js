function resizeInner() {
    $('.inner').height('');
    $('section').each(function(){
        var highest = 0;
        var top = 0;
        var horizontal = false;
        $(this).find('.inner').each(function(){
            $(this).height() > highest ? highest = $(this).height() : highest = highest;
            if (top == 0) {
                top = $(this).offset().top;
            } else {
                if ($(this).offset().top == top) {
                    horizontal = true;
                }
            }
        });
        if(horizontal) {
            $(this).find('.inner').each(function(){
                $(this).height(highest);
            });
        }
    });
}

$(document).ready(function(){
    resizeInner();
    $(window).resize(function(){
        resizeInner();
    });
});