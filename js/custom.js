// JavaScript Document


$(document).ready(function() {

    'use strict';
	
	
	/************************************************************************************ CAROUSEL STARTS */


    var owl = $('#about-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('#our-team');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var owl = $('#our-services');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.clients');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    var owl = $('.quotes-p');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.testimonials-p');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /************************************************************************************ DONUTCHART STARTS */
	
	$(".donutchart").donutchart("animate");

    /************************************************************************************ STICKY NAV. STARTS */


    $("#navigation").sticky({
        topSpacing: 0
    });



    /************************************************************************************ BOOTSTRAP LIGHTBOX STARTS */


    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            }
        });
    });

    //Programatically call
    $('#open-image').click(function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });
    $('#open-youtube').click(function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });




    /************************************************************************************ APPEAR PLUGIN STARTS */


    $('.animated').appear(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        if (!elem.hasClass('visible')) {
            var animationDelay = elem.data('animation-delay');
            if (animationDelay) {

                setTimeout(function() {
                    elem.addClass(animation + " visible");
                }, animationDelay);

            } else {
                elem.addClass(animation + " visible");
            }
        }
    });


    /************************************************************************************ TO TOP STARTS */



    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /************************************************************************************ SWITCHER CSS STARTS */


    $("#hide, #show").click(function() {
        if ($("#show").is(":visible")) {

            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function() {
                $(this).hide();
            });

            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function() {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });


});

    /************************************************************************************ PORTFOLIO DETAIL STARTS */

$('.items').click(function(event) {
    event.preventDefault();

    if ($('.portfolio-detail').hasClass('open-box')) {
        $('.portfolio-detail').addClass('closed-box');
        $('.portfolio-detail').removeClass('open-box');
    }

    var fileID = $(this).attr('data-project');

    if (fileID != null) {
        $('html,body').animate({
            scrollTop: $('.portfolio-detail').offset().top - 68
        }, 500);

    }

    $.ajax({
        url: fileID
    }).success(function(data) {
        $('.portfolio-detail').addClass('open-box');
        $('.portfolio-detail').html(data);
        $('.portfolio-detail').removeClass('closed-box');

        $('.close-detail').click(function() {
            $('.portfolio-detail').addClass('closed-box');
            $('.portfolio-detail').removeClass('open-box');
            $('html,body').animate({
                scrollTop: $('#portfolio').offset().top - 68
            }, 500);
            setTimeout(function() {
                $('.portfolio-detail').html('');
            }, 1000);
        });
    });

});
