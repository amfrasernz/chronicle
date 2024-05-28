import { selectedStudent } from './projects.js';

$(document).ready(displayStudentPage());
function displayStudentPage() {
    console.log(selectedStudent.name);
        document.getElementById('studentName').innerText = selectedStudent;
}