// $(document).ready(function() {
//     $('#enterBtn').on('click', function() {
//       $('#introScreen').addClass('fade-out');
//       setTimeout(function() {
//         $('#introScreen').addClass('d-none');
//         $('#homeMainContent').removeClass('d-none');
//       }, 1000);
//       setTimeout(function() {
//         $('#homeMainContent').addClass('fade-in');
//       }, 1200);
//     });
//   });


<<<<<<< HEAD
  $(document).ready(function() {
    $('#enterBtn').on('click', function() {
      $('#introScreen').addClass('fade-out');
      setTimeout(function() {
        $('#introScreen').addClass('d-none');
        $('#homeMainContent').removeClass('d-none');
      }, 1000);
      setTimeout(function() {
        $('#homeMainContent').addClass('fade-in');
      }, 1100);
=======
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
>>>>>>> 6394cb8ddf2e3130d2763e5b416464af278a0037
    });
  });




$(document).ready(function() {
    var $navbar = $('#navbar');

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 50) {
        $navbar.addClass('shadow-sm bg-paper-texture-2').removeClass('bg-transparent');
      } else {
        $navbar.removeClass('shadow-sm bg-paper-texture-2').addClass('bg-transparent');
      }
    });
  });