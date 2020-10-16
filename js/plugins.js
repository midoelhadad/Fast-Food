$(function () {
    'use strict';
    $(window).scroll(function () {
        
         var navbar = $('.navbar-fixed-top');
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
        
    });
        
        //scroll to top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 200)         
            {
                scrollButton.show();
            }
            else
            {
                scrollButton.hide();
            }
    });      
        
        //click on Button to scroll top
        scrollButton.click(function() {
            $("html,body").animate({scrollTop : 0 }, 1000);
        });  
    
});

/*
// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".sk-folding-cube").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});
*/

// start smothly scroll to element

$(function () {
    "use strict";
    $(".navbar-inverse .navbar-nav li a").click(function(e) {
        e.preventDefault();
       
        $("html, body").animate({
            scrollTop: $( "#" + $(this).data("scroll")).offset().top - 15 
        },1000);

    }) ;

    //add class active on navbar link and remove from siplings

    $(".navbar-inverse .navbar-nav li a").click(function (){

        $(this).addClass("activ").parent().siblings().find("a").removeClass();
    
        });
/*
    //sync Navbar Links With Sections
    $(window).scroll(function () {

        $(".block").each(function (){

            if($(window).scrollTop() > $(this).offset().top){

                var blockID = $(this).attr("id");

                $(".navbar-inverse .navbar-nav li a").removeClass("activ");

                $(".navbar-inverse .navbar-nav li a[data-scroll=" + blockID +  "]").addClass("activ");

                console.log($(this).attr("id"));
            }
        });
    });
    */


});


