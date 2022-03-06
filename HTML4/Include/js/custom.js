$('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeOut(500);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})







$(document).ready(function(){

$('.study-carousel').owlCarousel({
    loop:true,
	center: true,
	autoplay:false,
    margin:20,
    nav:true,
	dots: false,
	autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.study-winner').owlCarousel({
    loop:true,
	center: true,
	autoplay:true,
    margin:20,
    nav:false,
	dots: false,
	autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.s-winner').owlCarousel({
    loop:true,
	center: true,
	autoplay:true,
    margin:20,
    nav:false,
	dots: false,
	autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
});
$('.ss-winner').owlCarousel({
    loop:true,
	center: true,
	autoplay:true,
    margin:20,
    nav:false,
	dots: false,
	slideTransition: 'linear',
	autoplayTimeout: 5000,
	autoplaySpeed: 5000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:7
        }
    }
});
});


$(function () {
    $('select').selectpicker();
});


jQuery(document).ready(function(){
// Add smooth scrolling to all links
jQuery("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
jQuery('html, body').animate({
scrollTop: jQuery(hash).offset().top-100
}, 1000, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
window.location.href.split('#')[0]
});
} // End if
});
});