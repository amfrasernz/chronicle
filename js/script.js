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