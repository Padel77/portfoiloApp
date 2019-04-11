/*global $, alert, console*/
$(function () {
    'use strict';

    $(document).ready(function () {
        $('.menu').click(function () {
        
            $('div').toggleClass('active');
    
        });
        
    });
    function initialize() {

    
        var mapProp = {
        
            center: new google.maps.LatLng(33.963745, 28.243322),
        
            zoom: 5,
        
            mapTypeId: google.maps.MapTypeId.ROADMAP
    
        };
    
        var map = new google.maps.Map(document.getElementById("map"), mapProp);

    }

            
    google.maps.event.addDomListener(window, 'load', initialize);
    
    
    
   //Adjust slider height
    var winH = $(window).innerHeight(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    
    
    //featured  work shuffle
    $('.features-work ul li').on('click', function () {
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