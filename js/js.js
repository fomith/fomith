// Loader 

$(window).on('load', function () {
    $preloader = $('.loader'),
    $preloader.delay(350).fadeOut('slow');
  });




window.onload = function () {
    if (window.innerWidth <= 770)
        $(".services-articles").addClass("services-slick");
    $('.services-slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
};

let video = document.getElementById('video');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let stopBtn = document.getElementById('stop');
let muteBtn = document.getElementById('mute');
let progress = document.getElementById('progress');

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        buttonPlayMain.classList.add('button-main-hidden');
        btnPlayPause.classList.add('pause');
    } else {
        video.pause();
        buttonPlayMain.classList.remove('button-main-hidden');
        btnPlayPause.classList.remove('pause');
    }
})

buttonPlayMain.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        buttonPlayMain.classList.add('button-main-hidden');
        btnPlayPause.classList.add('pause');
    }
});

btnPlayPause.addEventListener('click', function () {
    if (video.paused) {
        btnPlayPause.classList.remove('play');
        btnPlayPause.classList.add('pause');
        buttonPlayMain.classList.add('button-main-hidden');
        video.play();
    } else {
        btnPlayPause.classList.remove('pause');
        btnPlayPause.classList.add('play');
        buttonPlayMain.classList.remove('button-main-hidden');
        video.pause();
    }
});

stopBtn.addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
    buttonPlayMain.classList.remove('button-main-hidden');
    btnPlayPause.classList.remove('pause');
});

muteBtn.addEventListener('click', function () {
    if (video.muted == false) {
        muteBtn.classList.remove('mute-on');
        muteBtn.classList.add('mute-off');
        video.muted = true;
    } else {
        muteBtn.classList.remove('mute-off');
        muteBtn.classList.add('mute-on');
        video.muted = false;
    }
});

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime);
    let d = video.duration;
    let c = video.currentTime;
    progress.value = c / d * 100;
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    this.value = o / w * 100;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
}


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

$(window).scroll(function () {
    let height = $(window).scrollTop();
    if ((height > 2700) && (height < 3900)) {
        $(function () {
            $({ n: 0 }).animate({ n: 12458 }, { duration: 400E1, step: function (a) { $("#n1").html(a | 0) } })
            $({ n: 0 }).animate({ n: 1796 }, { duration: 400E1, step: function (a) { $("#n2").html(a | 0) } })
            $({ n: 0 }).animate({ n: 1000 }, { duration: 400E1, step: function (a) { $("#n3").html(a | 0) } })
            $({ n: 0 }).animate({ n: 1500 }, { duration: 400E1, step: function (a) { $("#n4").html(a | 0) } })
        });
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