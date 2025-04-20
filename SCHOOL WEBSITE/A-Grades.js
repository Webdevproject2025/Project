// a-grades.js
function loadGradesData() {
    const gradesTableBody = document.getElementById('grades-data-body');

    // Sample data (palitan mo ito ng iyong totoong data)
    const studentGrades = [
        { no: 1, name: 'Student One', gender: 'Male', oralCom: '', komPan: '', genMath: '', earthSci: '', personalDev: '', eTech: '', hope: '', breadPastryQ1: '', breadPastryQ2: '' },
        { no: 2, name: 'Student Two', gender: 'Female', oralCom: '', komPan: '', genMath: '', earthSci: '', personalDev: '', eTech: '', hope: '', breadPastryQ1: '', breadPastryQ2: '' },
        // ... and so on
    ];

    if (gradesTableBody && studentGrades) {
        studentGrades.forEach(student => {
            const row = gradesTableBody.insertRow();
            row.insertCell().textContent = student.no;
            row.insertCell().classList.add('learners-name');
            row.insertCell().textContent = student.name;
            row.insertCell().textContent = student.gender;
            row.insertCell().textContent = student.oralCom;
            row.insertCell().textContent = student.komPan;
            row.insertCell().textContent = student.genMath;
            row.insertCell().textContent = student.earthSci;
            row.insertCell().textContent = student.personalDev;
            row.insertCell().textContent = student.eTech;
            row.insertCell().textContent = student.hope;
            row.insertCell().textContent = student.breadPastryQ1;
            row.insertCell().textContent = student.breadPastryQ2;
        });
    } else {
        console.error("Grades table body not found or no data to load.");
    }
}

// Maaari ka pang magdagdag ng iba pang functions dito para sa sorting, filtering, etc.