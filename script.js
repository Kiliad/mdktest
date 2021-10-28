$(document).ready(function(){
  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });
          
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1);
        return false;
    });
  
});