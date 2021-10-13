$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 180) {
            $(".navbar").addClass("bg-white");
        } else {
          $(".navbar").removeClass("bg-white");
        }
    }); 
});
    
    