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

    $(document).on('wheel', function () {
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

  // HOME PAGE SNAP TO SECTION
  const $sections = $('section');
  let currentIndex = 0;

  function scrollToSection(index) {
    if (index >= 0 && index < $sections.length) {
      $('html, body').animate({
        scrollTop: $sections.eq(index).offset().top
      }, 500);
      currentIndex = index;
    }
  }

  $(document).on('keydown', function(event) {
    if (event.key === 'ArrowDown') {
      scrollToSection(currentIndex + 1);
    } else if (event.key === 'ArrowUp') {
      scrollToSection(currentIndex - 1);
    }
  });

  $('#homeMainContent').on('wheel', function(event) {
    if (event.originalEvent.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else if (event.originalEvent.deltaY < 0) {
      scrollToSection(currentIndex - 1);
    }
  });



  // PROJECTS
});

