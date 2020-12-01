jQuery(document).ready(function($) {
 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
 
    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });
 
    $("#intro-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        items: 1
    });
 
    new WOW().init();
 
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });
 
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
 
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

 
    $('.portfolio-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
 
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });
 
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            900: {
                items: 6
            }
        }
    });
    var checkbox = document.querySelector("input[id=carWash]");

    checkbox.addEventListener('change', function () {
        //s
        document.getElementById("s1").textContent = "غسيل أساسي";
        document.getElementById("s2").textContent = "التنظيف الداخلي أساسي";
        document.getElementById("s3").textContent = "تنظيف كامل";
        document.getElementById("s4").textContent = "غسيل أساسي";
        //l1
        document.getElementById("l11").textContent = "نافذة رغوة عالية الضغط";
        document.getElementById("l12").textContent = "الاطارات وتنظيف العجلات";
        document.getElementById("l13").textContent = "تنظيف حصيرة";
        document.getElementById("l14").textContent = "تنظيف المحرك والزجاج";
        //l2
        document.getElementById("l21").textContent = "كنس";
        document.getElementById("l22").textContent = "تنظيف لوحة المعلومات";
        document.getElementById("l23").textContent = "تنظيف حصيرة";
        document.getElementById("l24").textContent = "";
        //l3
        document.getElementById("l31").textContent = "تنظيف الأساسي";
        document.getElementById("l32").textContent = "&";
        document.getElementById("l33").textContent = "التنظيف الداخلي الأساسي";
        document.getElementById("l34").textContent = "تنظيف تحت الجسم";
        //l4
        document.getElementById("l41").textContent = "نافذة رغوة عالية الضغط";
        document.getElementById("l42").textContent = "الاطارات وتنظيف العجلات";
        document.getElementById("l43").textContent = "تنظيف السجادة";
        document.getElementById("l44").textContent = "تنظيف المحرك و الزجاج";

        document.getElementById("selector").style.visibility = "visible";
        document.getElementById("selector1").style.visibility = "hidden";
        document.getElementById("salary").textContent = "/شهر";
            var isChecked = document.getElementById("carWash").checked;
            if (activities.value == "small" && isChecked) {
                document.getElementById("price1").textContent = "35";
                document.getElementById("price2").textContent = "150";
                document.getElementById("price3").textContent = "300";
                document.getElementById("price4").textContent = "199";
            } else if (activities.value == "medium" && isChecked) {
                document.getElementById("price1").textContent = "45";
                document.getElementById("price2").textContent = "200";
                document.getElementById("price3").textContent = "350";
                document.getElementById("price4").textContent = "249";
            } else if (activities.value == "large" && isChecked) {
                document.getElementById("price1").textContent = "55";
                document.getElementById("price2").textContent = "250";
                document.getElementById("price3").textContent = "400";
                document.getElementById("price4").textContent = "299";
            }
    });
    var checkbox1 = document.querySelector("input[id=modifyWindows]");

    checkbox1.addEventListener('change', function () {
        //s
        document.getElementById("s1").textContent = "CS";
        document.getElementById("s2").textContent = "CM";
        document.getElementById("s3").textContent = "CR";
        document.getElementById("s4").textContent = "مقدمة السيارة";
        //l1
        document.getElementById("l11").textContent = "3M";
        document.getElementById("l12").textContent = "خدمة أخذ وإعادة السيارة مجانا";
        document.getElementById("l13").textContent = "";
        document.getElementById("l14").textContent = "";
        //l2
        document.getElementById("l21").textContent = "3M";
        document.getElementById("l22").textContent = "خدمة أخذ وإعادة السيارة مجانا";
        document.getElementById("l23").textContent = "";
        document.getElementById("l24").textContent = "";
        //l3
        document.getElementById("l31").textContent = "3M";
        document.getElementById("l32").textContent = "خدمة أخذ وإعادة السيارة مجانا";
        document.getElementById("l33").textContent = "";
        document.getElementById("l34").textContent = "";
        //l4
        document.getElementById("l41").textContent = "خدمة أخذ وإعادة السيارة مجانا";
        document.getElementById("l42").textContent = "";
        document.getElementById("l43").textContent = "";
        document.getElementById("l44").textContent = "";

        document.getElementById("selector").style.visibility = "hidden";
        document.getElementById("selector1").style.visibility = "visible";
        document.getElementById("salary").textContent = "الريال";
        var isChecked = document.getElementById("modifyWindows").checked;
            if (activities.value == "small" && isChecked) {
                document.getElementById("price1").textContent = "1,199";
                document.getElementById("price2").textContent = "1,699";
                document.getElementById("price3").textContent = "1,999";
                document.getElementById("price4").textContent = "1,599";
            } else if (activities.value == "large" && isChecked) {
                document.getElementById("price1").textContent = "1,399";
                document.getElementById("price2").textContent = "1,899";
                document.getElementById("price3").textContent = "2,199";
                document.getElementById("price4").textContent = "1,799";
            }
    });
    var activities = document.getElementById("selector");

    activities.addEventListener("change", function () {
        var isChecked = document.getElementById("carWash").checked;
        if (activities.value == "small" && isChecked) {
            document.getElementById("price1").textContent ="35";
            document.getElementById("price2").textContent = "150";
            document.getElementById("price3").textContent = "300";
            document.getElementById("price4").textContent = "199";
        } else if (activities.value == "medium" && isChecked) {
            document.getElementById("price1").textContent = "45";
            document.getElementById("price2").textContent = "200";
            document.getElementById("price3").textContent = "350";
            document.getElementById("price4").textContent = "249";
        } else if (activities.value == "large" && isChecked) {
            document.getElementById("price1").textContent = "55";
            document.getElementById("price2").textContent = "250";
            document.getElementById("price3").textContent = "400";
            document.getElementById("price4").textContent = "299";
        }
    });
    var activities1 = document.getElementById("selector1");

    activities1.addEventListener("change", function () {
        var isChecked = document.getElementById("modifyWindows").checked;
        if (activities1.value == "small" && isChecked) {
            document.getElementById("price1").textContent = "1,199";
            document.getElementById("price2").textContent = "1,699";
            document.getElementById("price3").textContent = "1,999";
            document.getElementById("price4").textContent = "1,599";
        } else if (activities1.value == "large" && isChecked) {
            document.getElementById("price1").textContent = "1,399";
            document.getElementById("price2").textContent = "1,899";
            document.getElementById("price3").textContent = "2,199";
            document.getElementById("price4").textContent = "1,799";
        }
    });
});