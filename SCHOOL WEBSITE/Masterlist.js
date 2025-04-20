let students = {}; // Object para i-organize ang estudyante per section
let currentSection = ''; // Kasalukuyang napiling section
const initialRows = 20; // Bilang ng initial na rows

function renderInteractiveMasterlist() {
    const masterlistBody = document.getElementById('interactive-masterlist-body');

    if (!masterlistBody) {
        console.error("Hindi natagpuan ang interactive masterlist body!");
        return;
    }

    masterlistBody.innerHTML = ''; // Clear the table body

    if (students[currentSection] && students[currentSection].length > 0) {
        students[currentSection].forEach((student, index) => {
            const row = masterlistBody.insertRow();
            const numberCell = row.insertCell();
            const fullnameCell = row.insertCell();
            const lrnCell = row.insertCell();
            const sectionCell = row.insertCell();

            numberCell.textContent = index + 1;

            const fullnameInput = document.createElement('input');
            fullnameInput.type = 'text';
            fullnameInput.value = student.fullname || '';
            fullnameInput.addEventListener('change', (event) => updateStudent(index, 'fullname', event.target.value));
            fullnameCell.appendChild(fullnameInput);

            const lrnInput = document.createElement('input');
            lrnInput.type = 'text';
            lrnInput.value = student.lrn || '';
            lrnInput.addEventListener('change', (event) => updateStudent(index, 'lrn', event.target.value));
            lrnCell.appendChild(lrnInput);

            const sectionInput = document.createElement('input');
            sectionInput.type = 'text';
            sectionInput.value = student.section || currentSection; // Default sa current section
            sectionInput.readOnly = true; // Hindi na pwedeng baguhin ang section dito
            sectionCell.appendChild(sectionInput);
        });
    } else {
        const emptyRow = masterlistBody.insertRow();
        const emptyCell = emptyRow.insertCell();
        emptyCell.colSpan = 4;
        emptyCell.textContent = `No students in ${currentSection || 'selected section'}`;
        emptyCell.style.textAlign = 'center';
    }
}

function changeSection(section) {
    currentSection = section; // <<--- BREAKPOINT DITO
    console.log('Current Section:', currentSection);
    if (currentSection) {
        if (!students[currentSection]) {
            students[currentSection] = [];
            for (let i = 0; i < initialRows; i++) {
                students[currentSection].push({ fullname: '', lrn: '', section: currentSection });
            }
            console.log('Students after adding initial rows:', students[currentSection]);
        }
    }
    renderInteractiveMasterlist();
}

function addEmptyRow() {
    if (currentSection) {
        if (!students[currentSection]) {
            students[currentSection] = [];
        }
        students[currentSection].push({ fullname: '', lrn: '', section: currentSection });
        renderInteractiveMasterlist();
    } else {
        alert('Please select a class first.');
    }
}

function updateStudent(index, property, value) {
    if (students[currentSection] && students[currentSection][index]) {
        students[currentSection][index][property] = value;
        console.log('Updated students:', students); // Para makita sa console ang pagbabago
    }
}

function printMasterlist() {
    window.print();
}

// Tawagin ang renderInteractiveMasterlist sa unang pag-load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('interactive-masterlist-body')) {
            renderInteractiveMasterlist();
        }
    });
} else {
    if (document.getElementById('interactive-masterlist-body')) {
        renderInteractiveMasterlist();
    }
}