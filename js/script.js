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


// Get students list
var studentObjects = [];
const xmlUrl = './student-info/students.xml';


function xmlToObject(xml) {
  const students = [];
  const $studentNodes = $(xml).find('student');

  $studentNodes.each(function () {
    const $studentNode = $(this);
    const student = {
      name: $studentNode.find('name').text(),
      degree: $studentNode.find('degree').text(),
      major: $studentNode.find('major').text(),
      portfolioLink: $studentNode.find('portfolio_link').text(),
      bio: $studentNode.find('bio').text(),
      imageFilename: $studentNode.find('image_filename').text(),
      project: {}
    };

    const $projectNode = $studentNode.find('project').first();
    if ($projectNode.length) {
      student.project = {
        name: $projectNode.find('project_name').text(),
        description: $projectNode.find('description').text(),
        category: $projectNode.find('category').text(),
        imageFilename: $projectNode.find('project_image_filename').text()
      };
    }

    students.push(student);
  });

  return students;
}

function getStudentInfo() {
    $.ajax({
    url: xmlUrl,
    dataType: 'xml',
    success: function (data) {
      if (document.title === 'Projects | Design Degree Showcase 2024 | University of Waikato | Chronicle') {
        $(document).ready(displayProjects(studentObjects));
      }
      return xmlToObject(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error('Error fetching and parsing XML:', textStatus, errorThrown);
      return [];
    }
  });
}


