// Nav bar

$(document).ready(function () {
  var navbar = $('#navbar');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      navbar.addClass('shadow-sm bg-paper-texture-2').removeClass('bg-transparent');
    } else {
      navbar.removeClass('shadow-sm bg-paper-texture-2').addClass('bg-transparent');
    }
  });
});

$(document).ready(function () {
  $('.clamp').each(function () {
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

function transformString(input) {
  let output = input.replace(/\s+/g, '-');
  output = output.toLowerCase();
  return output;
}


