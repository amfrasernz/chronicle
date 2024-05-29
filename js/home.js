
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


  document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.circle-frame');
    frames.forEach(frame => {
      const originalUrl = frame.style.backgroundImage;
      const hoverUrl = frame.getAttribute('data-hover');
      if (hoverUrl) {
        frame.addEventListener('mouseover', () => {
          frame.style.backgroundImage = `url(${hoverUrl})`;
        });
        frame.addEventListener('mouseout', () => {
          frame.style.backgroundImage = originalUrl;
        });
      }
    });
  });