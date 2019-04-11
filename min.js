/*global $, document, window*/
$(function () {
    'use strict';

    $(document).ready(function () {
        $('.nav-item').click(function () {
        
            $('nav-item').toggleClass('active');
    
        });
    });
    //smooth nice scroll
    $('.about').click(function () {
        $('html, body').animate({
            
            scrollTop: $("#about-us").offset().top
            
        }, 3000);
    });
    $('.service').click(function () {
        $('html, body').animate({
            
            scrollTop: $("#service").offset().top
            
        }, 3000);
    });
 

    $('.client').click(function () {
        $('html, body').animate({
            
            scrollTop: $("#testi").offset().top
            
        }, 3000);
    });
 

    $('.contact').click(function () {
        $('html, body').animate({
            
            scrollTop: $("#contact").offset().top
            
        }, 3000);
    });
 
//Adjust slider height
    var winh   = $(window).height(),
        navh   = $('.navbar').innerHeight(),
        upperh = $('.upper-bar').innerHeight();
        
    $('#slider').height(winh - (upperh + navh));
    
    //featured  work shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css('opacity', 1);
        } else {
            $('.shuffle-images .col-md').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', 1);
            
        }
    });
    // our auto slider code    
    $(function autoslider() {
            
        $('.logo .active').each(function () {
                
            if (!$(this).is(':last-Child')) {
                    
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoslider();
                        
                });
                    
            } else {
                    
                
                $(this).delay(3000).fadeOut(1000, function () {
                
                
                    $(this).removeClass('active');
                
                
                    $('.logo div').eq(0).addClass('active').fadeIn();
                
                    autoslider();
            
                });
        
            }
    
        });

    });
});