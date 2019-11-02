window.onload = function () {
    if (window.innerWidth >= 1024)
        document.getElementById('video-container').innerHTML = '<video muted autoplay="autoplay" poster="./video/move.jpg" loop="loop"> <source src="./video/move.mp4" type="video/mp4" /> <source src="./video/move.webm" type="video/webm" /> <source src="./video/move.ogv" type="video/ogg" /> </video>'
};

$(document).ready(function () {
    $("#menu_panel").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
            
        $(".nav_icon").removeClass("active-icon");
        $(".menu_panel").removeClass("active");
        $(".header").removeClass("active-header");
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$(document).ready(function () {
    $("#home").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

let TriggerClick = 0;

$(".nav_icon").click(function () {
    let menutop = $(".menu_panel").css("top");
    if (TriggerClick == 0) {
        TriggerClick = 1;
        $(this).addClass("active-icon");
        $(".menu_panel").addClass("active");
        $(".header").addClass("active-header");
        $(".menu_panel").slideDown();
    } else {
        TriggerClick = 0;
        $(this).removeClass("active-icon");
        $(".menu_panel").removeClass("active");
        $(".header").removeClass("active-header");
        $(".menu_panel").slideUp();
    }
});

$(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 100) {
        $('header').addClass('header-fixed');
        $('nav_icon').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
        $('nav_icon').removeClass('header-fixed');
    }
});
