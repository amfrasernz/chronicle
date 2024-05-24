// Show the splash screen on page load
$(document).ready(function() {
    $('#splashScreen').fadeIn();
});

// Show the splash screen when scrolling
$(window).scroll(function() {
    $('#splashScreen').fadeIn();
});

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});
