// Displays and removes mobile menu

$(function() {
    $("body").on("click", "#menu", function() {
        $("nav").toggleClass("menu-show");
    });
    $("nav > a").click(function() {
        $("nav").removeClass("menu-show");
    });
});



// displays and removes colored logo

$(document).ready(function() {
    $("#navlogo").mouseenter(function() {
        $(this).attr("src", "images/B4.png");
    });
});

$(document).ready(function() {
    $("#navlogo").mouseleave(function() {
        $(this).attr("src", "images/B3.png");
    });
});



// Removes colored logo from mobile

$(document).ready(function() {
    $("#navlogo").mouseup(function() {
        $(this).attr("src", "images/B3.png");
    });
});




// Displays and removes gif from Home Page

$(document).ready(function() {
    $("#hi").click(function() {
        $(".giphy").slideToggle("slow");
    });
});


$(document).ready(function() {
    $("#jesse").click(function() {
        $(".internet").slideToggle("slow");
    });
});


// Displays text box on Portfolio Page


$(document).ready(function() {
    $("#jedi").click(function() {
        alert("text: " + $("#mindtricks").text());
    });
});



// Trying to add sliding gif to mobile version

$(document).ready(function() {
    $("#mobile-hi").on("tap",function() {
        $(".giphy").slideDown("slow");
    });
});