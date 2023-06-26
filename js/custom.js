$(document).ready(function () {

    /*top menu toggle*/

    $('.header-menu__btn').click(function () {
        $('.header-navgroup').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#hamburger').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.header-navgroup').removeClass('vis');
        $('body').removeClass('oh');
        $('#hamburger').removeClass('open');
    });
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed');
    }
    else {
        $('.header').removeClass('fixed');
    }

    /*end top menu toggle*/

    /*scroll to top*/
    var scrollTop = $(".scroll-top");
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 700) {
            $(scrollTop).addClass('vis');
        } else {
            $(scrollTop).removeClass('vis');
        }

            if ($(window).scrollTop() >= 1) {
                $('.header').addClass('fixed');
            }
            else {
                $('.header').removeClass('fixed');
            }

    });
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*end scroll to top*/
    
});

$('.header-nav__link, .footer__nav-link').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    remove_hash_from_url();
    $('.header-navgroup').removeClass('vis');
    $('body').removeClass('oh');
    $('#hamburger').removeClass('open');
    event.preventDefault();
    //remove_hash_from_url();
});
function remove_hash_from_url() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
            uri.indexOf("#"));

        window.history.replaceState({},
            document.title, clean_uri);
    }
}

if ($(window).width() > 1280) {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".move").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 400;
            const y = (window.innerHeight - event.pageY * position) / 100;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}
$('.review__more').click(function() {
    $(this).siblings().addClass('full');
    $(this).hide();
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 86 + "px";
        }
    });
}
$('.port__item').click(function() {
    $('body').addClass('oh');
    $('.modal-bg').addClass('vis');
    $('#modal-port').addClass('vis');

});
$('.modal__close').click(function() {
    $('body').removeClass('oh');
    $('.modal-bg').removeClass('vis');
    $('.modal-wrap').removeClass('vis');
});

