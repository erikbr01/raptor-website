let scrollBorder = 200;
var originalIsWhite = false;
var navbarIsExpanded = false;

$(document).ready(function () {
    let classes = $('.navbar')[0].className.split(' ')
    let changeTheme = classes.includes('navbar-dark');
    originalIsWhite = changeTheme;

    $(window).scroll(function () {
        if (!navbarIsExpanded) {
            var scroll = $(window).scrollTop();
            if (scroll >= scrollBorder) {
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
        }
    });
});



function onNavbarExpansion() {
    let classes = $('.navbar')[0].className.split(' ');
    if (!navbarIsExpanded) {
        $(".navbar").addClass("bg-white");
        if (originalIsWhite) {
            $(".navbar").addClass("navbar-light");
            $(".navbar").removeClass("navbar-dark");
        }
    } else if ($(window).scrollTop() < scrollBorder) {
        $(".navbar").removeClass("bg-white");
        if (originalIsWhite) {
            $(".navbar").addClass("navbar-dark");
            $(".navbar").removeClass("navbar-light");
        }
    } else {

    }
    navbarIsExpanded = !navbarIsExpanded;
}