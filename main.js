$(document).ready(function () {
    let classes = $('.navbar')[0].className.split(' ')
    let changeTheme = classes.includes('navbar-dark');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 180) {
            $(".navbar").addClass("bg-white");

            if (changeTheme) {
                $(".navbar").addClass("navbar-light");
                $(".navbar").removeClass("navbar-dark");

            }
        } else {
            $(".navbar").removeClass("bg-white");
            if (changeTheme) {
                $(".navbar").removeClass("navbar-light");
                $(".navbar").addClass("navbar-dark");

            }
        }
    });
});