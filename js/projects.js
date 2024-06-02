

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

$.ajax({
    url: xmlUrl,
    dataType: 'xml',
    success: function (data) {
        studentObjects = xmlToObject(data);
        if (document.title === 'Projects | Design Degree Showcase 2024 | University of Waikato | Chronicle') {
            $(document).ready(displayProjects(studentObjects));
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error('Error fetching and parsing XML:', textStatus, errorThrown);
    }
});



function displayProjects(students) {
    var container = document.getElementById('projectsContainer');
    students.forEach(student => {
        container.innerHTML += createProject(student);
    });
}

function createProject(student) {
    let projectImgUrl = student.project.imageFilename
        ? `images/thumbnails/${student.project.imageFilename}`
        : 'images/thumbnails/placeholder-img.png';


    return `
        <div class="single-project op-2 row row-cols-1 row-cols-md-2 row-gap-4 bg-white bg-opacity-75 p-4 align-items-center" data-value="${transformString(student.name)}">
            <div class="col px-0">
                <div class="project-image-mask">
                    <img src="${projectImgUrl}" class="img-fluid project-gallery-image" />
                </div>
            </div>
            <div class="col px-0 ps-md-5 d-flex flex-column">
            <!--<h6 class="text-black-50">${student.project.category}</h6>-->
                <h3>${student.project.name}</h3>
                <p>by ${student.name}</p>
                <p class="small clamp">${student.project.description}</p>
                <a class="btn btn-light align-self-end">View Project <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    `
}

var selectedStudent = "Hello There";

$(document).ready(function() {
    $(document).on('click', '.single-project', function() {
        var selectedStudentName = $(this).data('value');

        selectedStudent = studentObjects.find(function(student) {
            return transformString(student.name) === selectedStudentName;
        });

        console.log("students object is: " + studentObjects);

        if (selectedStudent) {
            var encodedStudentName = encodeURIComponent(selectedStudentName);

            window.location.href = 'student.html?student=' + encodedStudentName;
        } else {
            console.error('Selected student not found:', selectedStudentName);
        }
    });
});

$(document).ready(displayStudentPage());
function displayStudentPage() {
    console.log(selectedStudent.name);
        document.getElementById('studentName').innerText = selectedStudent;
}
