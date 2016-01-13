/**
 *  +---------------------------------------------------+
 *  |               MADE BY                             |
 *  |                 LEWIS JOHNSON                     |
 *  |                                       12/01/2016  |
 *  +---------------------------------------------------+
 */

var nav_bar_ul = null;
var ham_el1 = null;
var ham_el2 = null;
var ham_el3 = null;

$(document).ready(function () {

    var hamburger_hidden = true;


    ham_el1 = $('.ham_1');
    ham_el2 = $('.ham_2');
    ham_el3 = $('.ham_3');
    nav_bar_ul = $("#nav-bar-ul");
    hello();
    developer();
    //Toggle Hamburger Menu
    $('#hamburger').click(HamburgerToggle);

    $(window).resize(function () {
        // Checks that the header scales properly
        if ($(window).width() > 700) {
            if (hamburger_hidden == false) {
                hideHamburgerMenu();
            }
        }
    });

    function hideHamburgerMenu() {
        $(".nav-bar-mobile").toggleClass("open");

        $('#hamburger').css("margin-left", '-60px');
        $(".nav-bar").css("margin-left", '0px');

        //Animate hamburger divs
        ham_el1.rotate(0);
        ham_el1.toggleClass("on");
        ham_el2.toggleClass("on");
        ham_el3.rotate(0);
        ham_el3.toggleClass("on");

        //Drag up navigation bar
        nav_bar_ul.toggleClass("open");

        hamburger_hidden = true;
    }

    function showHamburgerMenu() {
//Animate hamburger divs
        ham_el1.rotate(45);
        ham_el1.toggleClass("on");
        ham_el2.toggleClass("on");
        ham_el3.rotate(-45);
        ham_el3.toggleClass("on");


        $('#hamburger').css("margin-left", '-250px');
        $(".nav-bar").css("margin-left", '-220px');
        $(".nav-bar-mobile").toggleClass("open");

        hamburger_hidden = false;
    }

    function HamburgerToggle() {
        if (hamburger_hidden == true) {
            showHamburgerMenu();
        }
        else {
            hideHamburgerMenu();
        }
    }

    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if(height  > 120) {
            $("#title-text").css({
                'opacity' : '0',
                'top' : '12%'
            });
        }
        else {
            $("#title-text").css({
                'opacity' : '1',
                'top' : '20%'
            });
        }

        if(height  > 443) {
            $(".nav-bar").css("background", 'black');
            $(".nav-bar-mobile-overlay").css("background", 'black');
        }
         else{
            $(".nav-bar").css("background", 'transparent');
            $(".nav-bar-mobile-overlay").css("background", 'transparent');
        }

    });
});


var lol = true;
function hello() {
    if (lol) {
        lol = false;
        $("#hello").text("hello...");
    } else {
        lol = true;
        $('#hello').text("hello...|");
    }
    setTimeout(hello, 500);
}

var arrindex = 0;
var iThinkiKnowTheseLanguages = [
    "SOFTWARE",
    "C#",
    ".NET",
    "JAVA",
    "UNITY",
    "C++",
    "WEB"
];
var header_dev_text = null;
function developer() {
    header_dev_text = $('#header-name-top');
    header_dev_text.text(iThinkiKnowTheseLanguages[arrindex]);
    if (iThinkiKnowTheseLanguages.length - 1 != arrindex) {
        arrindex++;
    }
    else {
        arrindex = 0;
    }
    setTimeout(devAniamte, 500);
}

function devAniamte() {
    header_dev_text.css("opacity", '1');
    setTimeout(devAniamte2, 2000);
}

function devAniamte2() {
    header_dev_text.css("opacity", '0');
    setTimeout(developer, 500);
}

jQuery.fn.rotate = function (degrees) {
    $(this).css({
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        'transform': 'rotate(' + degrees + 'deg)'
    });
    return $(this);
};


