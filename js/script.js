$(document).ready(function () {
  // NAVBAR ON SCROLL
  let navbar = $('#navbar');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      navbar.addClass('shadow-sm bg-paper-texture-2').removeClass('bg-transparent');
    } else {
      navbar.removeClass('shadow-sm bg-paper-texture-2').addClass('bg-transparent');
    }
  });

  // CLIP TEXT BY NUM LINES
  $('.clamp').each(function () {
    let lineHeight = parseInt($(this).css('line-height'));
    let maxLines = 2;
    let maxHeight = lineHeight * maxLines;
    let actualHeight = $(this).height();
    if (actualHeight > maxHeight) {
      let text = $(this).text();
      let truncatedText = text.slice(0, Math.floor(text.length * (maxHeight / actualHeight))) + '...';
      $(this).text(truncatedText);
    }
  });

  // HOME PAGE INTRO SCREEN
  function getSessionItem(key) {
    return sessionStorage.getItem(key);
  }

  function setSessionItem(key, value) {
    sessionStorage.setItem(key, value);
  }

  function showIntroScreen() {
    $('#introScreen').removeClass('d-none');
    $('#homeMainContent').addClass('d-none');

    $('#enterBtn').on('click', function () {
      $('#introScreen').addClass('fade-out');
      setTimeout(function () {
        $('#introScreen').addClass('d-none');
        $('#homeMainContent').removeClass('d-none');
        setSessionItem('introShown', 'true');
      }, 1000);
      setTimeout(function () {
        $('#homeMainContent').addClass('fade-in');
      }, 1100);
    });

    $(document).on('wheel', function () {
      $('#introScreen').addClass('fade-out');
      setTimeout(function () {
        $('#introScreen').addClass('d-none');
        $('#homeMainContent').removeClass('d-none');
        setSessionItem('introShown', 'true');
      }, 1000);
      setTimeout(function () {
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

  const $frames = $('.circle-frame');
  $frames.each(function () {
    const $frame = $(this);
    const originalUrl = $frame.css('background-image');
    const hoverUrl = $frame.data('hover');
    if (hoverUrl) {
      $frame.hover(
        function () {
          $frame.css('background-image', `url(${hoverUrl})`);
        },
        function () {
          $frame.css('background-image', originalUrl);
        }
      );
    }
  });


    // PROJECTS
      $('.filter-btn').on('click', function() {
        // Remove 'current' class from all buttons
        $('.filter-btn').removeClass('current');
        // Add 'current' class to the clicked button
        $(this).addClass('current');
    
        // Get the filter category
        const filter = $(this).data('filter');
    
        // Show/Hide projects based on the filter
        if (filter === 'all') {
          $('.single-project').show();
        } else {
          $('.single-project').hide();
          $(`.single-project[data-category="${filter}"]`).show();
        }
      });
    
      // Trigger the click event for the 'All Projects' button to show all projects initially
      $('.filter-btn[data-filter="all"]').click();    
});



