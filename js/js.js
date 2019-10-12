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