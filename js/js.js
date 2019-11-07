// video

window.onload = function () {
    if (window.innerWidth >= 1171)
        document.getElementById('video-container').innerHTML = '<video muted autoplay="autoplay" poster="./video/move.jpg" loop="loop"> <source src="./video/move.mp4" type="video/mp4" /> <source src="./video/move.webm" type="video/webm" /> <source src="./video/move.ogv" type="video/ogg" /> </video>'
};

//slick slider 

$(document).ready(function () {
    $('.testimonials-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
});

// scroll html

$("#menu_panel").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top - 75 + 'px';

    $(".nav_icon").removeClass("active-icon");
    $(".menu_panel").removeClass("active");
    $(".header").removeClass("active-header");
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#home").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top - 75 + 'px';
    $(".nav_icon").removeClass("active-icon");
    $(".menu_panel").removeClass("active");
    $(".header").removeClass("active-header");
    $('body,html').animate({ scrollTop: top }, 1500);
});

// menu mobile

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

// OPEN FULL INFO BLOCK

let teamLeftTrigger = 0;
let teamCenterLeftTrigger = 0;
let teamCenterRightTrigger = 0;
let teamRightTrigger = 0;

$(".team-left").click(function () {
    if (teamLeftTrigger == 0) {
        teamLeftTrigger = 1;
        $(".info-left").addClass("open-info-activ");
        $(".block-one").addClass("open-info-activ");

        $(".info-center-left").removeClass("open-info-activ");
        $(".info-center-right").removeClass("open-info-activ");
        $(".info-right").removeClass("open-info-activ");

        $(".block-two").removeClass("open-info-activ");
        $(".block-tree").removeClass("open-info-activ");
        $(".block-four").removeClass("open-info-activ");
        teamCenterLeftTrigger = 0;
        teamCenterRightTrigger = 0;
        teamRightTrigger = 0;
    }
});

$(".team-center-left").click(function () {
    if (teamCenterLeftTrigger == 0) {
        teamCenterLeftTrigger = 1;
        $(".info-center-left").addClass("open-info-activ");
        $(".block-two").addClass("open-info-activ");

        $(".info-left").removeClass("open-info-activ");
        $(".info-center-right").removeClass("open-info-activ");
        $(".info-right").removeClass("open-info-activ");

        $(".block-one").removeClass("open-info-activ");
        $(".block-tree").removeClass("open-info-activ");
        $(".block-four").removeClass("open-info-activ");
        teamLeftTrigger = 0;
        teamCenterRightTrigger = 0;
        teamRightTrigger = 0;
    }
});
    
$(".team-center-right").click(function () {
    if (teamCenterRightTrigger == 0) {
        teamCenterRightTrigger = 1;
        $(".info-center-right").addClass("open-info-activ");
        $(".block-tree").addClass("open-info-activ");

        $(".info-left").removeClass("open-info-activ");
        $(".info-center-left").removeClass("open-info-activ");
        $(".info-right").removeClass("open-info-activ");

        $(".block-one").removeClass("open-info-activ");
        $(".block-two").removeClass("open-info-activ");
        $(".block-four").removeClass("open-info-activ");
        teamLeftTrigger = 0;
        teamCenterLeftTrigger = 0;
        teamRightTrigger = 0;
    }
});

$(".team-right").click(function () {
    if (teamRightTrigger == 0) {
        teamRightTrigger = 1;
        $(".info-right").addClass("open-info-activ");
        $(".block-four").addClass("open-info-activ");

        $(".info-left").removeClass("open-info-activ");
        $(".info-center-left").removeClass("open-info-activ");
        $(".info-center-right").removeClass("open-info-activ");

        $(".block-one").removeClass("open-info-activ");
        $(".block-two").removeClass("open-info-activ");
        $(".block-tree").removeClass("open-info-activ");
        teamLeftTrigger = 0;
        teamCenterLeftTrigger = 0;
        teamCenterRightTrigger = 0;
    }
});