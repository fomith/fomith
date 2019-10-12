window.onload = function(){
    if(window.innerWidth >= 1024)
    document.getElementById('video-container').innerHTML = '<video muted autoplay="autoplay" poster="./video/move.jpg" style="width:100%; height: 500px;" title="1280" loop="loop"> <source src="./video/move.mp4" type="video/mp4" /> <source src="./video/move.webm" type="video/webm" /> <source src="./video/move.ogv" type="video/ogg" /> </video>'
};

var TriggerClick = 0;

$(".nav_icon").click(function () {
    var menutop = $(".menu_panel").css("top");
    if (TriggerClick == 0) {
        TriggerClick = 1;
        $(this).addClass("active");
        $(".menu_panel").addClass("active");
        $(".menu_panel").slideDown();
    } else {
        TriggerClick = 0;
        $(this).removeClass("active");
        $(".menu_panel").removeClass("active");
        $(".menu_panel").slideUp();
    }
}); 
