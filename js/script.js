// // SHOWS INTRO SCREEN EACH TIME
  // $(document).ready(function() {
  //   $('#enterBtn').on('click', function() {
  //     $('#introScreen').addClass('fade-out');
  //     setTimeout(function() {
  //       $('#introScreen').addClass('d-none');
  //       $('#homeMainContent').removeClass('d-none');
  //     }, 1000);
  //     setTimeout(function() {
  //       $('#homeMainContent').addClass('fade-in');
  //     }, 1100);
  //   });
  // });

      // SHOWS INTRO SCREEN ONCE PER SESSION
      $(document).ready(function() {
        function getSessionItem(key) {
          return sessionStorage.getItem(key);
        }
      
        function setSessionItem(key, value) {
          sessionStorage.setItem(key, value);
        }
      
        function showIntroScreen() {
          $('#introScreen').removeClass('d-none');
          $('#homeMainContent').addClass('d-none');
          $('#enterBtn').on('click', function() {
            $('#introScreen').addClass('fade-out');
            setTimeout(function() {
              $('#introScreen').addClass('d-none');
              $('#homeMainContent').removeClass('d-none');
              setSessionItem('introShown', 'true');
            }, 1000);
            setTimeout(function() {
              $('#homeMainContent').addClass('fade-in');
            }, 1100);
          });
        }
      
        function showMainContent() {
          $('#introScreen').addClass('d-none');
          $('#homeMainContent').removeClass('d-none').addClass('fade-in');
        }
      
        if (!getSessionItem('introShown')) {
          showIntroScreen();
        } else {
          showMainContent();
        }
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


  $(document).ready(function() {
    $('.clamp').each(function() {
        var lineHeight = parseInt($(this).css('line-height'));
        var maxLines = 2;
        var maxHeight = lineHeight * maxLines;
        var actualHeight = $(this).height();
        if (actualHeight > maxHeight) {
            var text = $(this).text();
            var truncatedText = text.slice(0, Math.floor(text.length * (maxHeight / actualHeight))) + '...';
            $(this).text(truncatedText);
        }
    });
});