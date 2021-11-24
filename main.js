// determines the scroll length until the navbar becomes opaque
let scrollBorder = 200;



// state variable that determines whether the navbar is currently in the expanded state or not
// expanded in this case refers to the state on mobile devices with the collapsible navbar (hamburger button)
var navbarIsExpanded = false; 

$(document).ready(function () {
    // navbar classes
    let classes = $('.navbar')[0].className.split(' ')
    
    // this may seem like a duplicate variable, but it's necessary for immediate updates of the text colour when the state changes


    // on scroll, update the navbar theme depending on how far the user has scrolled
    // change the background to make the navbar opaque and adjust the text to be readable depending on the text colour we start with
    $(window).scroll(function () {
        console.log(classes);
        if (!navbarIsExpanded) {
            var scroll = $(window).scrollTop();
            if (scroll >= scrollBorder) {
                $(".navbar").addClass("bg-black");

                // change text colour
                // if (changeTheme) {
                //     $(".navbar").addClass("navbar-light");
                //     $(".navbar").removeClass("navbar-dark");
                // }
            } else {
                $(".navbar").removeClass("bg-black");
                // if (changeTheme) {
                //     $(".navbar").removeClass("navbar-light");
                //     $(".navbar").addClass("navbar-dark");
                // }
            }
        }
    });
});


// callback for the onclick event from the hamburger button on the mobile navbar
// make navbar opaque when expanded to prevent any issues with readability and adjust text colour
function onNavbarExpansion() {
    console.log($('.navbar')[0].className.split(' '));
    if (!navbarIsExpanded) {
        $(".navbar").addClass("bg-white");
        $(".navbar").removeClass("navbar-dark");
        $(".navbar").addClass("navbar-light");
        // if (originalIsWhite) {
        //     $(".navbar").addClass("navbar-light");
        //     $(".navbar").removeClass("navbar-dark");
        // }
        // if the navbar is in the top region, it should be transparent again
    } else if ($(window).scrollTop() < scrollBorder) {
        $(".navbar").removeClass("bg-white");
        $(".navbar").removeClass("bg-black");
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass("navbar-dark");
    } else {
        $(".navbar").removeClass("bg-white");
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass("navbar-dark");
        $(".navbar").addClass("bg-black");
        // if (originalIsWhite) {
        //     $(".navbar").addClass("navbar-dark");
        //     $(".navbar").removeClass("navbar-light");
        // }
    }
    navbarIsExpanded = !navbarIsExpanded;
}