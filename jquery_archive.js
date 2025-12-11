$(document).ready(function () {
    // $("#button-hide-h1").click(function () {
    //     $("h1").hide(1000);
    // });
    // $("#button-show-h1").click(function () {
    //     $("h1").show(1000);
    // });
    // $("#button-toggle-h1").click(function () {
    //     $("h1").toggle(1000);
    // });
    $("#button-toggle-h1").click(function () {
        $("h1")
            .fadeToggle(1000)
    });
    $("#button-slide").on("click", function(){
        $("h4").slideToggle("slow");
    })
    $("#button-animate").on("click", function(){
        $("h1").animate({left: '+=20px'});
        $("h1").animate({top: '+=20px'}, function(){
            $("h1").html("<b>done</b>");
        });
    })
    // $("button.button-p-hide-class").click(function () {
        //     $("#p-hide-class").hide();
        // });
    // $("p").on("click", function () {
    //     $(this).hide();
    // });
    $("h1").dblclick(function () {
        $(this).hide();
    });
    $("#mouse-leave").mouseleave(function () {
        $(this).hide();
    });
    // $("h2").mouseenter(function () {
        //     $(this).hide();
        // });
    $("#mouse-up").mouseup(function () {
        $(this).hide();
    });
    // $("button").focus(function () {
    //     $(this).hide();
    // });
    // $("button").blur(function () {
    //     $(this).hide();
    // });
    $("p").on({
        mouseenter: function(){
            $(this).css("color","red")
        },
        mouseleave: function(){
            $(this).css("color","green")
        },
        click: function(){
            $(this).css("color","blue")
        },
    })
});