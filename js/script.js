$(document).ready(function () {
  // NAVBAR ON SCROLL
  let navbar = $('#navbar');

  function updateNavbarAppearance() {
    if ($(window).scrollTop() > 50) {
      navbar.addClass('shadow-sm bg-paper-texture-2').removeClass('bg-transparent');
    } else {
      navbar.removeClass('shadow-sm bg-paper-texture-2').addClass('bg-transparent');
    }
  }

  updateNavbarAppearance();

  $(window).on('scroll', updateNavbarAppearance);

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

  function toggleIntroAndContent() {
    $('#introScreen').addClass('fade-out');
    setTimeout(function () {
        $('#introScreen').addClass('d-none');
        $('#homeMainContent').removeClass('d-none');
        setSessionItem('introShown', 'true');
    }, 1000);
    setTimeout(function () {
        $('#homeMainContent').addClass('fade-in');
    }, 1100);
}

function showIntroScreen() {
    $('#introScreen').removeClass('d-none');
    $('#homeMainContent').addClass('d-none');

    $('#enterBtn').on('click', toggleIntroAndContent);

    $(document).on('wheel', toggleIntroAndContent);
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
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  var filter = getUrlParameter('filter') || 'all';

  $('.filter-btn').removeClass('current');
  $('.filter-btn[data-filter="' + filter + '"]').addClass('current');

  if (filter === 'all') {
    $('.single-project').show();
  } else {
    $('.single-project').hide();
    $('.single-project[data-category="' + filter + '"]').show();
  }

  $('.filter-btn').click(function () {
    var selectedFilter = $(this).data('filter');
    $('.filter-btn').removeClass('current');
    $(this).addClass('current');

    if (selectedFilter === 'all') {
      $('.single-project').show();
    } else {
      $('.single-project').hide();
      $('.single-project[data-category="' + selectedFilter + '"]').show();
    }
  });

});



