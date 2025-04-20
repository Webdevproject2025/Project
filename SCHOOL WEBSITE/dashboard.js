// Function to load content based on menu selection
function loadContent(contentType) {
    const contentContainer = document.getElementById('content-container');

    // Clear previous content
    contentContainer.innerHTML = '';

    // Load specific content based on selection
    switch(contentType) {
        case 'airtag':
    contentContainer.innerHTML = `
        <h2>Student Information Management</h2>
        <div class="filter-controls">
            <label for="section-filter">Section:</label>
            <select id="section-filter">
                <option value="">All Sections</option>
                <option value="TVL - Avellana">TVL - Avellana</option>
            </select>

            <label for="adviser-filter">Adviser:</label>
            <select id="adviser-filter">
                <option value="">All Advisers</option>
                <option value="JOHN ARVIL L. FULLIGAN">JOHN ARVIL L. FULLIGAN</option>
            </select>

            <label for="search-name">Search:</label>
            <input type="text" id="search-name" placeholder="Search by name...">
        </div>
        <div class="airtag-controls">
            <button class="btn btn-blue" onclick="printStudentCards()">Print Cards</button>
            <button class="btn btn-green" onclick="exportData()">Export Data</button>
            <button class="btn btn-add" onclick="addStudent()">Add Student</button>
        </div>
        <div class="student-cards-container">
            </div>
    `;

    const students = [
        { id: 1, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 2, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 3, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 4, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 5, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 6, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 7, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 8, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 9, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 10, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 11, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 12, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 13, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 14, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 15, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 16, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 17, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 18, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 19, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
        { id: 20, lrn: '#N/A', lastName: '', firstName: '', middleName: '', section: 'TVL - Avellana', adviser: 'JOHN ARVIL L. FULLIGAN' },
    ];

    const studentCardsHTML = students.map(student => `
        <div class="student-card" data-student-id="${student.id}">
            <div class="card-header">
                <span class="lrn-display">${student.lrn}</span>
                <span class="edit-button" onclick="editStudentCard(this.closest('.student-card'), '${student.lastName}', '${student.firstName}', '${student.middleName}', '${student.lrn}', '${student.section}', '${student.adviser}')">✏️</span>
                <span class="close-button" onclick="removeStudentCard(this.closest('.student-card'))">X</span>
            </div>
            <div class="card-content">
                <div class="full-name">${student.firstName} ${student.middleName} ${student.lastName}</div>
                <div class="section-tag">${student.section}</div>
                <div class="info">
                    <div class="label">LRN</div>
                    <div class="value lrn-value">${student.lrn}</div>
                </div>
                <div class="info">
                    <div class="label">Last Name</div>
                    <div class="value last-name-value">${student.lastName}</div>
                </div>
                <div class="info">
                    <div class="label">First Name</div>
                    <div class="value first-name-value">${student.firstName}</div>
                </div>
                <div class="info">
                    <div class="label">Middle Name</div>
                    <div class="value middle-name-value">${student.middleName}</div>
                </div>
            </div>
            <div class="card-footer">${student.adviser}<br>ADVISER</div>
            <div class="edit-actions">
                <button class="save-btn" onclick="saveStudentData(this.closest('.student-card'))">Save</button>
                <button class="cancel-btn" onclick="cancelEdit(this.closest('.student-card'))">Cancel</button>
            </div>
        </div>
    `).join('');

    document.querySelector('.student-cards-container').innerHTML = studentCardsHTML;
    break;
    case 'masterlist':
    contentContainer.innerHTML = `
        <h2>Masterlist</h2>
        <div class="masterlist-controls">
            <div class="filter-group">
                <label for="select-class">Select a Class:</label>
                <select id="select-class" onchange="changeSection(this.value)">
                    <option value="">Select a Class</option>
                    <option value="HUMMS A">HUMMS A</option>
                    <option value="HUMMS B">HUMMS B</option>
                    <option value="STEM 1">STEM 1</option>
                    <option value="ABM 1">ABM 1</option>
                    </select>
            </div>
            <button class="btn btn-print" onclick="printMasterlist()">Print Masterlist</button>
        </div>
        <table id="interactive-masterlist-table" class="interactive-masterlist-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fullname</th>
                    <th>LRN</th>
                    <th>Section</th>
                </tr>
            </thead>
            <tbody id="interactive-masterlist-body">
            </tbody>
        </table>
        <button class="btn btn-add-row" onclick="addEmptyRow()">Add Row</button>
    `;
    renderInteractiveMasterlist();
    break;
        
    case 'checklist':
    contentContainer.innerHTML = `
        <h2>Checklist</h2>
        <div class="checklist-controls">
            <div class="filter-group">
                <label for="select-class">Select a Class:</label>
                <select id="select-class" onchange="changeChecklistSection(this.value)">
                    <option value="">Select a Class</option>
                    <option value="HUMMS A">HUMMS A</option>
                    <option value="HUMMS B">HUMMS B</option>
                    <option value="STEM 1">STEM 1</option>
                    <option value="ABM 1">ABM 1</option>
                </select>
            </div>
            <button class="btn btn-print" onclick="printEditableChecklist()">Print Checklist</button>
        </div>
        <table id="editable-checklist-table" class="editable-checklist-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>sf10</th>
                    <th>PSA/NSO</th>
                    <th>Status of student</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody id="editable-checklist-body">
            </tbody>
        </table>
        <button class="btn btn-add-row" onclick="addEditableChecklistRow()">Add Row</button>
    `;
    renderEditableChecklist();
    break;

        case 'bmi':
    contentContainer.innerHTML = `
        <h2>BMI Calculator for Students</h2>
        <div class="bmi-input-form">
            <label for="student-name">Student Name:</label>
            <input type="text" id="student-name"><br><br>
            <label for="height-cm">Height (cm):</label>
            <input type="number" id="height-cm"><br><br>
            <label for="weight-kg">Weight (kg):</label>
            <input type="number" id="weight-kg"><br><br>
            <button class="btn btn-calculate-bmi" onclick="calculateBMI()">Calculate BMI</button>
        </div>
        <div class="bmi-result">
            <h3>BMI Result:</h3>
            <p id="bmi-value"></p>
            <p id="bmi-category"></p>
        </div>
        <div class="bmi-list-controls">
            <h3>Student BMI List</h3>
            <button class="btn btn-print" onclick="printBMIList()">Print List</button>
            <button class="btn btn-save" onclick="saveBMIData()">Save Data</button>
            <button class="btn btn-load" onclick="loadBMIData()">Load Data</button>
        </div>
        <div class="bmi-list">
            <table id="bmi-table" class="bmi-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height (cm)</th>
                        <th>Weight (kg)</th>
                        <th>BMI</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody id="bmi-body">
                </tbody>
            </table>
        </div>
    `;
    renderBMIList();
    break;

    case 'data-entry-1':
    contentContainer.innerHTML = `
        <h2>Student Data Entry</h2>
        <div class="data-entry-form">
            <div class="form-group">
                <label for="lrn">LRN:</label>
                <input type="text" id="lrn">
            </div>
            <div class="form-group">
                <label for="last-name">Last Name:</label>
                <input type="text" id="last-name">
            </div>
            <div class="form-group">
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name">
            </div>
            <div class="form-group">
                <label for="middle-name">Middle Name:</label>
                <input type="text" id="middle-name">
            </div>
            <div class="form-group">
                <label for="suffix">Suffix:</label>
                <input type="text" id="suffix">
            </div>
            <div class="form-group">
                <label for="birthdate">Birthdate:</label>
                <input type="date" id="birthdate">
            </div>
            <div class="form-group">
                <label for="religion">Religion:</label>
                <input type="text" id="religion">
            </div>
            <div class="form-group">
                <label for="house-number">House Number:</label>
                <input type="text" id="house-number">
            </div>
            <div class="form-group">
                <label for="barangay">Barangay:</label>
                <input type="text" id="barangay">
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city">
            </div>
            <div class="form-group">
                <label for="province">Province:</label>
                <input type="text" id="province">
            </div>
            <div class="form-group">
                <label for="father-name">Father's Name:</label>
                <input type="text" id="father-name">
            </div>
            <div class="form-group">
                <label for="mother-name">Mother's Name:</label>
                <input type="text" id="mother-name">
            </div>
            <div class="form-group">
                <label for="guardian-name">Guardian's Name:</label>
                <input type="text" id="guardian-name">
            </div>
            <div class="form-group">
                <label for="contact-number">Contact Number:</label>
                <input type="text" id="contact-number">
            </div>
            <button class="btn btn-add-student" onclick="addStudentData()">Add Student</button>
        </div>

        <div class="data-entry-list-controls">
            <h3>Student Data List</h3>
            <button class="btn btn-print" onclick="printStudentData()">Print List</button>
        </div>
        <div class="data-entry-list">
            <table id="student-data-table" class="student-data-table">
                <thead>
                    <tr>
                        <th>LRN</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Suffix</th>
                        <th>Birthdate</th>
                        <th>Religion</th>
                        <th>House Number</th>
                        <th>Barangay</th>
                        <th>City</th>
                        <th>Province</th>
                        <th>Father's Name</th>
                        <th>Mother's Name</th>
                        <th>Guardian's Name</th>
                        <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody id="student-data-body">
                </tbody>
            </table>
        </div>
    `;
    renderStudentDataList();
    break;

        case 'data-entry-2':
            contentContainer.innerHTML = `
        <h2>Student Data Entry</h2>
        <div class="data-entry-form">
            <div class="form-group">
                <label for="lrn">LRN:</label>
                <input type="text" id="lrn">
            </div>
            <div class="form-group">
                <label for="last-name">Last Name:</label>
                <input type="text" id="last-name">
            </div>
            <div class="form-group">
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name">
            </div>
            <div class="form-group">
                <label for="middle-name">Middle Name:</label>
                <input type="text" id="middle-name">
            </div>
            <div class="form-group">
                <label for="suffix">Suffix:</label>
                <input type="text" id="suffix">
            </div>
            <div class="form-group">
                <label for="birthdate">Birthdate:</label>
                <input type="date" id="birthdate">
            </div>
            <div class="form-group">
                <label for="religion">Religion:</label>
                <input type="text" id="religion">
            </div>
            <div class="form-group">
                <label for="house-number">House Number:</label>
                <input type="text" id="house-number">
            </div>
            <div class="form-group">
                <label for="barangay">Barangay:</label>
                <input type="text" id="barangay">
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city">
            </div>
            <div class="form-group">
                <label for="province">Province:</label>
                <input type="text" id="province">
            </div>
            <div class="form-group">
                <label for="father-name">Father's Name:</label>
                <input type="text" id="father-name">
            </div>
            <div class="form-group">
                <label for="mother-name">Mother's Name:</label>
                <input type="text" id="mother-name">
            </div>
            <div class="form-group">
                <label for="guardian-name">Guardian's Name:</label>
                <input type="text" id="guardian-name">
            </div>
            <div class="form-group">
                <label for="contact-number">Contact Number:</label>
                <input type="text" id="contact-number">
            </div>
            <button class="btn btn-add-student" onclick="addStudentData()">Add Student</button>
        </div>

        <div class="data-entry-list-controls">
            <h3>Student Data List</h3>
            <button class="btn btn-print" onclick="printStudentData()">Print List</button>
        </div>
        <div class="data-entry-list">
            <table id="student-data-table" class="student-data-table">
                <thead>
                    <tr>
                        <th>LRN</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Suffix</th>
                        <th>Birthdate</th>
                        <th>Religion</th>
                        <th>House Number</th>
                        <th>Barangay</th>
                        <th>City</th>
                        <th>Province</th>
                        <th>Father's Name</th>
                        <th>Mother's Name</th>
                        <th>Guardian's Name</th>
                        <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody id="student-data-body">
                </tbody>
            </table>
        </div>
    `;
        break;
        
        case 'a-grades':
            contentContainer.innerHTML = `
                <h2>Senior High School Class Record</h2>
                <div class="table-responsive">
                    <table class="editable-grades-table">
                        <thead>
                            <tr>
                                <th rowspan="2">No.</th>
                                <th rowspan="2" class="learners-name">LEARNERS' NAMES</th>
                                <th rowspan="2">GENDER</th>
                                <th>ORAL COMMUNICATION</th>
                                <th>KOMUNIKASYON AT PANANALIKSIK SA WIKA AT KULTURANG PILIPINO</th>
                                <th>GENERAL MATHEMATICS</th>
                                <th>EARTH & LIFE SCI.</th>
                                <th>PERSONAL DEV.</th>
                                <th>E-TECH</th>
                                <th>H.O.P.E.</th>
                                <th colspan="2">BREAD & PASTRY</th>
                                <th rowspan="2">SEMESTRAL AVERAGE</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Q1</th>
                                <th>Q2</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="grades-data-body">
                            <tr>
                                <td>1</td>
                                <td><input type="text" class="name-input" placeholder="Student Name"></td>
                                <td>
                                    <select class="gender-select">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input bread-pastry-q1" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input bread-pastry-q2" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td class="semestral-average"></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><input type="text" class="name-input" placeholder="Student Name"></td>
                                <td>
                                    <select class="gender-select">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input bread-pastry-q1" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td><input type="number" class="grade-input bread-pastry-q2" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)"></td>
                                <td class="semestral-average"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button class="btn btn-add-row" onclick="addNewStudentRow()">Add Row</button>
                <button class="btn btn-save" onclick="saveGradesData()">Save Grades</button>
            `;
        
            function addNewStudentRow() {
                const gradesTableBody = document.getElementById('grades-data-body');
                const newRow = gradesTableBody.insertRow();
                const rowNumber = gradesTableBody.rows.length;
        
                newRow.insertCell().textContent = rowNumber;
                newRow.insertCell().innerHTML = '<input type="text" class="name-input" placeholder="Student Name">';
                newRow.insertCell().innerHTML = `
                    <select class="gender-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                `;
                for (let i = 0; i < 7; i++) { // For the first 7 single-quarter subjects
                    newRow.insertCell().innerHTML = '<input type="number" class="grade-input" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)">';
                }
                newRow.insertCell().innerHTML = '<input type="number" class="grade-input bread-pastry-q1" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)">';
                newRow.insertCell().innerHTML = '<input type="number" class="grade-input bread-pastry-q2" min="0" max="100" oninput="calculateRowAverage(this.parentNode.parentNode)">';
                newRow.insertCell().classList.add('semestral-average');
            }
        
            function calculateRowAverage(row) {
                const gradeInputs = row.querySelectorAll('.grade-input');
                let totalGrade = 0;
                let validSubjectCount = 0;
        
                for (let i = 0; i < gradeInputs.length; i++) {
                    const grade = parseFloat(gradeInputs[i].value);
                    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
                        totalGrade += grade;
                        validSubjectCount++;
                    }
                }
        
                const breadPastryQ1Input = row.querySelector('.bread-pastry-q1');
                const breadPastryQ2Input = row.querySelector('.bread-pastry-q2');
                const breadPastryQ1 = parseFloat(breadPastryQ1Input?.value);
                const breadPastryQ2 = parseFloat(breadPastryQ2Input?.value);
        
                if (!isNaN(breadPastryQ1) && !isNaN(breadPastryQ2)) {
                    totalGrade += (breadPastryQ1 + breadPastryQ2) / 2;
                    validSubjectCount++;
                }
        
                const semestralAverageCell = row.querySelector('.semestral-average');
                if (semestralAverageCell && validSubjectCount > 0) {
                    semestralAverageCell.textContent = (totalGrade / validSubjectCount).toFixed(2);
                } else if (semestralAverageCell) {
                    semestralAverageCell.textContent = ''; // Clear if no valid grades
                }
            }
        
            function saveGradesData() {
                const tableRows = document.getElementById('grades-data-body').rows;
                const gradesData = [];
        
                for (let i = 0; i < tableRows.length; i++) {
                    const rowData = {};
                    rowData.name = tableRows[i].querySelector('.name-input')?.value;
                    rowData.gender = tableRows[i].querySelector('.gender-select')?.value;
                    const gradeInputs = tableRows[i].querySelectorAll('.grade-input');
                    rowData.oralCommunication = gradeInputs[0]?.value;
                    rowData.komPan = gradeInputs[1]?.value;
                    rowData.generalMath = gradeInputs[2]?.value;
                    rowData.earthSci = gradeInputs[3]?.value;
                    rowData.personalDev = gradeInputs[4]?.value;
                    rowData.eTech = gradeInputs[5]?.value;
                    rowData.hope = gradeInputs[6]?.value;
                    rowData.breadPastryQ1 = tableRows[i].querySelector('.bread-pastry-q1')?.value;
                    rowData.breadPastryQ2 = tableRows[i].querySelector('.bread-pastry-q2')?.value;
                    rowData.semestralAverage = tableRows[i].querySelector('.semestral-average')?.textContent;
                    gradesData.push(rowData);
                }
        
                console.log("Grades Data:", gradesData);
                alert("Grades data saved (check console for output)!");
            }
        
            break;


        case 'b-grades':
            contentContainer.innerHTML = '<h2>B GRADES Content Here</h2>';
            break;
        case 'a-summary':
            contentContainer.innerHTML = '<h2>A SUMMARY Content Here</h2>';
            break;
        case 'b-summary':
            contentContainer.innerHTML = '<h2>B SUMMARY Content Here</h2>';
            break;
        case 'card-in':
            contentContainer.innerHTML = '<h2>CARD IN Content Here</h2>';
            break;
        case 'card-out':
            contentContainer.innerHTML = '<h2>CARD OUT Content Here</h2>';
            break;
        case 'sf1':
            contentContainer.innerHTML = '<h2>SF1 Content Here</h2>';
            break;
        case 'sfaa':
            contentContainer.innerHTML = '<h2>SFAA Content Here</h2>';
            break;
        case 'sf2a':
            contentContainer.innerHTML = '<h2>SF2A Content Here</h2>';
            break;
        case 'sf2b':
            contentContainer.innerHTML = '<h2>SF2B Content Here</h2>';
            break;
        case 'sf5a':
            contentContainer.innerHTML = '<h2>SF5A Content Here</h2>';
            break;
        case 'sf5b':
            contentContainer.innerHTML = '<h2>SF5B Content Here</h2>';
            break;
        case 'sf10a':
            contentContainer.innerHTML = '<h2>SF10A Content Here</h2>';
            break;
        case 'sf10b':
            contentContainer.innerHTML = '<h2>SF10B Content Here</h2>';
            break;
        case 'with-honors':
            contentContainer.innerHTML = '<h2>WITH HONORS Content Here</h2>';
            break;
        case 'special-case':
            contentContainer.innerHTML = '<h2>SPECIAL CASE Content Here</h2>';
            break;
        case 'certificate':
            contentContainer.innerHTML = '<h2>CERTIFICATE Content Here</h2>';
            break;
        case 'class-ranking':
            contentContainer.innerHTML = '<h2>CLASS RANKING Content Here</h2>';
            break;
        case 'attendance-summary':
            contentContainer.innerHTML = '<h2>ATTENDANCE SUMMARY Content Here</h2>';
            break;
        case 'perfect-attendance':
            contentContainer.innerHTML = '<h2>PERFECT ATTENDANCE Content Here</h2>';
            break;
        case 'observed-values':
            contentContainer.innerHTML = '<h2>OBSERVED VALUES Content Here</h2>';
            break;
        case 'gradeslips-a4':
            contentContainer.innerHTML = '<h2>GRADESLIPS A4 Content Here</h2>';
            break;
        case 'gradeslip':
            contentContainer.innerHTML = '<h2>GRADESLIP Content Here</h2>';
            break;
        case 'status':
            loadStatusTable(); // Call loadStatusTable directly for 'status'
            break;
        default:
            contentContainer.innerHTML = '<div class="welcome-message"><h1>Content Not Available</h1><p>The selected content is not available yet.</p></div>';
    
}

// Function to load the Status table
function loadStatusTable() {
    const contentContainer = document.getElementById('content-container');

    // Create table structure with completely empty fields
    const tableHTML = `
        <div class="student-profile-header">
            <h2>STUDENTS' PROFILE</h2>

            <div class="school-info">
                <div>School: <input type="text" id="school-name" class="input-field"></div>
                <div>Semester: <input type="text" id="semester" class="input-field"></div>
            </div>

            <div class="section-info">
                <div>Section: <input type="text" id="section-name" class="input-field"></div>
                <div>TRACK: <input type="text" id="track-name" class="input-field"></div>
            </div>
        </div>

        <table class="student-profile-table">
            <thead>
                <tr>
                    <th class="numbering"></th>
                    <th class="lrn">LRN</th>
                    <th class="name">Name</th>
                    <th class="school-origin">School of Origin</th>
                    <th class="remarks">Remarks</th>
                </tr>
            </thead>
            <tbody>
                ${generateTableRows(20)}
            </tbody>
        </table>

        <table class="summary-table">
            <tr>
                <th></th>
                <th>NEW</th>
                <th>OLD</th>
                <th>TOTAL</th>
            </tr>
            <tr>
                <td>MALE</td>
                <td><input type="text" name="male_new"></td>
                <td><input type="text" name="male_old"></td>
                <td><input type="text" name="male_total" readonly></td>
            </tr>
            <tr>
                <td>FEMALE</td>
                <td><input type="text" name="female_new"></td>
                <td><input type="text" name="female_old"></td>
                <td><input type="text" name="female_total" readonly></td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td><input type="text" name="new_total" readonly></td>
                <td><input type="text" name="old_total" readonly></td>
                <td><input type="text" name="grand_total" readonly></td>
            </tr>
        </table>

        <div class="action-buttons">
            <button class="save-btn" onclick="saveData()">Save</button>
            <button class="print-btn" onclick="printTable()">Print</button>
            <button class="reset-btn" onclick="resetForm()">Reset</button>
        </div>
    `;

    contentContainer.innerHTML = tableHTML;

    // Add event listeners to input fields for automatic calculations
    setupCalculations();
}

// Function to generate table rows
function generateTableRows(count) {
    let rows = '';
    for (let i = 1; i <= count; i++) {
        rows += `
            <tr>
                <td class="numbering">${i}</td>
                <td><input type="text" name="lrn_${i}"></td>
                <td><input type="text" name="name_${i}"></td>
                <td><input type="text" name="school_${i}"></td>
                <td><input type="text" name="remarks_${i}"></td>
            </tr>
        `;
    }
    return rows;
}

// Function to set up automatic calculations for the summary table
function setupCalculations() {
    const maleNew = document.querySelector('input[name="male_new"]');
    const maleOld = document.querySelector('input[name="male_old"]');
    const femaleNew = document.querySelector('input[name="female_new"]');
    const femaleOld = document.querySelector('input[name="female_old"]');

    // Add event listeners to calculate totals
    [maleNew, maleOld, femaleNew, femaleOld].forEach(input => {
        input.addEventListener('input', calculateTotals);
    });
}

// Function to calculate totals
function calculateTotals() {
    const maleNew = parseInt(document.querySelector('input[name="male_new"]').value) || 0;
    const maleOld = parseInt(document.querySelector('input[name="male_old"]').value) || 0;
    const femaleNew = parseInt(document.querySelector('input[name="female_new"]').value) || 0;
    const femaleOld = parseInt(document.querySelector('input[name="female_old"]').value) || 0;

    // Calculate row totals
    const maleTotal = maleNew + maleOld;
    const femaleTotal = femaleNew + femaleOld;

    //

    // Calculate column totals
    const newTotal = maleNew + femaleNew;
    const oldTotal = maleOld + femaleOld;
    const grandTotal = maleTotal + femaleTotal;

    // Update fields
    document.querySelector('input[name="male_total"]').value = maleTotal;
    document.querySelector('input[name="female_total"]').value = femaleTotal;
    document.querySelector('input[name="new_total"]').value = newTotal;
    document.querySelector('input[name="old_total"]').value = oldTotal;
    document.querySelector('input[name="grand_total"]').value = grandTotal;
}

// Function to save data
function saveData() {
    alert('Data saved successfully!');
    // In a real application, you would send the data to a server here
}

// Function to print the table
function printTable() {
    window.print();
}

// Function to reset the form
function resetForm() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.value = '';
    });
    calculateTotals(); // Reset the calculated fields as well
}

// ... existing JavaScript functions ...

// ... existing JavaScript functions ...

document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('value') && target.classList.contains('editable')) {
        if (!target.querySelector('input[type="text"]')) {
            startEdit(target);
        }
    }
});

function startEdit(element) {
    element.classList.add('editing');
    const originalText = element.textContent;
    element.innerHTML = `<input type="text" value="${originalText}">`;
    const inputField = element.querySelector('input[type="text"]');
    inputField.focus();

    inputField.addEventListener('blur', function() {
        endEdit(element, this.value);
    });

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            endEdit(element, this.value);
        } else if (event.key === 'Escape') {
            cancelEditSingle(element, originalText);
        }
    });

    const card = element.closest('.student-card');
    if (card) {
        const editActions = card.querySelector('.edit-actions');
        if (editActions) {
            editActions.style.display = 'flex';
        }
    }
}

function endEdit(element, newValue) {
    element.classList.remove('editing');
    element.textContent = newValue;
    const card = element.closest('.student-card');
    if (card) {
        const editActions = card.querySelector('.edit-actions');
        if (editActions) {
            editActions.style.display = 'flex';
        }
    }
}

function saveStudentData(cardElement) {
    const lrn = cardElement.querySelector('.lrn-edit').value;
    const section = cardElement.querySelector('.section-edit').value;
    const lastName = cardElement.querySelector('.last-name-edit').value;
    const firstName = cardElement.querySelector('.first-name-edit').value;
    const middleName = cardElement.querySelector('.middle-name-edit').value;
    const adviser = cardElement.querySelector('.adviser-edit').value;

    // Kunin yung display elements
    const lrnDisplay = cardElement.querySelector('.lrn-display');
    const fullNameDisplay = cardElement.querySelector('.full-name');
    const sectionDisplay = cardElement.querySelector('.section-tag');
    const lastNameDisplay = cardElement.querySelector('.last-name-value');
    const firstNameDisplay = cardElement.querySelector('.first-name-value');
    const middleNameDisplay = cardElement.querySelector('.middle-name-value');
    const adviserDisplay = cardElement.querySelector('.card-footer');

    // I-update yung text content ng display elements
    if (lrnDisplay) lrnDisplay.textContent = lrn || '#N/A';
    if (fullNameDisplay) fullNameDisplay.textContent = `${lastName}, ${firstName} ${middleName}`;
    if (sectionDisplay) sectionDisplay.textContent = section || 'N/A';
    if (lastNameDisplay) lastNameDisplay.textContent = lastName || '';
    if (firstNameDisplay) firstNameDisplay.textContent = firstName || '';
    if (middleNameDisplay) middleNameDisplay.textContent = middleName || '';
    if (adviserDisplay) adviserDisplay.innerHTML = `${adviser}<br>ADVISER`;

    // Ibalik sa display mode yung card
    resetStudentCard(cardElement, lastName, firstName, middleName, lrn, section, adviser);

    // Ipakita yung "saved" message (simulation)
    alert(`Data for Student ID ${cardElement.dataset.studentId} saved! (Not really, this is just a simulation)`);
}

// ... your other JavaScript functions ...

// ... iba mo pang JavaScript ...

function cancelEditSingle(element, originalText) {
    element.classList.remove('editing');
    element.textContent = originalText;
}

function removeStudentCard(cardElement) {
    const studentId = cardElement.dataset.studentId;
    if (confirm(`Are you sure you want to remove student ID ${studentId}?`)) {
        cardElement.remove();
        console.log('Removing student ID:', studentId);
        alert(`Student ID ${studentId} removed! (Not really, this is just a simulation)`);
    }
}

function printStudentCards() {
    alert('Functionality for printing student cards will be implemented here!');
}

function exportData() {
    alert('Functionality for exporting data will be implemented here!');
}

function addStudent() {
    const addStudentForm = document.getElementById('add-student-form');
    const overlay = document.getElementById('overlay');
    addStudentForm.style.display = 'block';
    overlay.style.display = 'block';
}

function closeAddStudentForm() {
    const addStudentForm = document.getElementById('add-student-form');
    const overlay = document.getElementById('overlay');
    addStudentForm.style.display = 'none';
    overlay.style.display = 'none';
}

function saveNewStudent() {
    const newLrn = document.getElementById('new-lrn').value;
    const newFullName = document.getElementById('new-full-name').value;
    const newSection = document.getElementById('new-section').value;
    const newContact = document.getElementById('new-contact').value;
    const newAdviser = document.getElementById('new-adviser').value;

    // Sa tunay na application, dito mo ise-save yung data at magdadagdag ng bagong student card sa display.
    console.log('Adding new student:', { lrn: newLrn, fullName: newFullName, section: newSection, contact: newContact, adviser: newAdviser });
    alert('New student data (not really) saved!');

    closeAddStudentForm(); // Itago ang form pagkatapos "i-save"
    loadContent('airtag'); // Reload para makita (kunwari) yung bagong card (kung manually nating idadagdag)
}

function cancelEdit(cardElement) {
    const editableFields = cardElement.querySelectorAll('.editable.editing input[type="text"]');
    editableFields.forEach(input => {
        input.value = input.defaultValue; // Ibalik sa default value (kung meron)
        input.parentElement.classList.remove('editing');
    });
    cardElement.classList.remove('editing');
    const editActions = cardElement.querySelector('.edit-actions');
    if (editActions) {
        editActions.style.display = 'none';
    }
    // For simplicity, let's just reload the 'airtag' content to reset the values
    loadContent('airtag');
}

// Function to load the Status table

function loadStatusTable() {
    const contentContainer = document.getElementById('content-container');

    // Create table structure with completely empty fields
    const tableHTML = `
        <div class="student-profile-header">
            <h2>STUDENTS' PROFILE</h2>

            <div class="school-info">
                <div>School: <input type="text" id="school-name" class="input-field"></div>
                <div>Semester: <input type="text" id="semester" class="input-field"></div>
            </div>

            <div class="section-info">
                <div>Section: <input type="text" id="section-name" class="input-field"></div>
                <div>TRACK: <input type="text" id="track-name" class="input-field"></div>
            </div>
        </div>

        <table class="student-profile-table">
            <thead>
                <tr>
                    <th class="numbering"></th>
                    <th class="lrn">LRN</th>
                    <th class="name">Name</th>
                    <th class="school-origin">School of Origin</th>
                    <th class="remarks">Remarks</th>
                </tr>
            </thead>
            <tbody>
                ${generateTableRows(20)}
            </tbody>
        </table>

        <table class="summary-table">
            <tr>
                <th></th>
                <th>NEW</th>
                <th>OLD</th>
                <th>TOTAL</th>
            </tr>
            <tr>
                <td>MALE</td>
                <td><input type="text" name="male_new"></td>
                <td><input type="text" name="male_old"></td>
                <td><input type="text" name="male_total" readonly></td>
            </tr>
            <tr>
                <td>FEMALE</td>
                <td><input type="text" name="female_new"></td>
                <td><input type="text" name="female_old"></td>
                <td><input type="text" name="female_total" readonly></td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td><input type="text" name="new_total" readonly></td>
                <td><input type="text" name="old_total" readonly></td>
                <td><input type="text" name="grand_total" readonly></td>
            </tr>
        </table>

        <div class="action-buttons">
            <button class="save-btn" onclick="saveData()">Save</button>
            <button class="print-btn" onclick="printTable()">Print</button>
            <button class="reset-btn" onclick="resetForm()">Reset</button>
        </div>
    `;

    contentContainer.innerHTML = tableHTML;

    // Add event listeners to input fields for automatic calculations
    setupCalculations();
}

function editStudentCard(cardElement, lastName, firstName, middleName, lrn, section, adviser) {
    cardElement.classList.add('editing');

    const header = cardElement.querySelector('.card-header');
    header.innerHTML = `
        <input type="text" class="lrn-edit" value="${lrn}">
        <span class="save-button" onclick="saveStudentData(this.closest('.student-card'))">💾</span>
        <span class="cancel-button" onclick="cancelEdit(this.closest('.student-card'))">❌</span>
    `;

    const cardContent = cardElement.querySelector('.card-content');
    cardContent.innerHTML = `
        <div class="edit-info">
            <label>Section:</label>
            <input type="text" class="section-edit" value="${section}">
            <label>Last Name:</label>
            <input type="text" class="last-name-edit" value="">
            <label>First Name:</label>
            <input type="text" class="first-name-edit" value="">
            <label>Middle Name:</label>
            <input type="text" class="middle-name-edit" value="">
        </div>
    `;

    const cardFooter = cardElement.querySelector('.card-footer');
    cardFooter.innerHTML = `<input type="text" class="adviser-edit" value="${adviser}">`;

    // Update display to blank as well
    const fullNameDisplay = cardElement.querySelector('.full-name');
    const lastNameDisplay = cardElement.querySelector('.last-name-value');
    const firstNameDisplay = cardElement.querySelector('.first-name-value');
    const middleNameDisplay = cardElement.querySelector('.middle-name-value');

    if (fullNameDisplay) fullNameDisplay.textContent = '';
    if (lastNameDisplay) lastNameDisplay.textContent = '';
    if (firstNameDisplay) firstNameDisplay.textContent = '';
    if (middleNameDisplay) middleNameDisplay.textContent = '';
}

const cardContent = cardElement.querySelector('.card-content');
cardContent.innerHTML = `
    <label>Section:</label>
    <input type="text" class="section-edit" value="${section}">
    <label>Last Name:</label>
    <input type="text" class="last-name-edit" value="${lastName}">
    <label>First Name:</label>
    <input type="text" class="first-name-edit" value="${firstName}">
    <label>Middle Name:</label>
    <input type="text" class="middle-name-edit" value="${middleName}">
`;


function saveStudentCard(cardElement) {
    const headerSpan = cardElement.querySelector('.card-header span');
    const sectionDiv = cardElement.querySelector('.section.static-section');
    const lrnDiv = cardElement.querySelectorAll('.info.static-info .value')[0];
    const lastNameDiv = cardElement.querySelectorAll('.info.static-info .value')[1];
    const firstNameDiv = cardElement.querySelectorAll('.info.static-info .value')[2];
    const middleNameDiv = cardElement.querySelectorAll('.info.static-info .value')[3];
    const adviserFooterDiv = cardElement.querySelector('.card-footer');

    const lrnInput = cardElement.querySelector('.card-header input[data-field="lrn"]');
    const sectionInput = cardElement.querySelector('.edit-section input[data-field="section"]');
    const lastNameInput = cardElement.querySelector('.edit-info input[data-field="lastName"]');
    const firstNameInput = cardElement.querySelector('.edit-info input[data-field="firstName"]');
    const middleNameInput = cardElement.querySelector('.edit-info input[data-field="middleName"]');
    const adviserInput = cardElement.querySelector('.edit-info input[data-field="adviser"]');
    const adviserFooterInput = cardElement.querySelector('.card-footer input[data-field="adviser"]');

    const newLrn = lrnInput.value || '#N/A';
    const newSection = sectionInput.value || '';
    const newLastName = lastNameInput.value || '';
    const newFirstName = firstNameInput.value || '';
    const newMiddleName = middleNameInput.value || '';
    const newAdviser = adviserInput.value || 'ADVISER';

    cardElement.classList.remove('editing');
    cardElement.innerHTML = `
        <div class="card-header">
            <span>${newLrn}</span>
            <span class="close-button">X</span>
        </div>
        <div class="card-content">
            <div class="section static-section">${newSection}</div>
            <div class="info static-info"><div class="label">LRN:</div><div class="value">${newLrn}</div></div>
            <div class="info static-info"><div class="label">Last Name:</div><div class="value">${newLastName}</div></div>
            <div class="info static-info"><div class="label">First Name:</div><div class="value">${newFirstName}</div></div>
            <div class="info static-info"><div class="label">Middle Name:</div><div class="value">${newMiddleName}</div></div>
        </div>
        <div class="card-footer">${newAdviser}<br>ADVISER</div>
    `;
    // Sa totoong application, dito mo ise-save yung mga bagong value sa database o sa local storage.
    console.log('Saved:', {
        section: newSection,
        lrn: newLrn,
        lastName: newLastName,
        firstName: newFirstName,
        middleName: newMiddleName,
        adviser: newAdviser
    });
}

function resetStudentCard(cardElement, lastName, firstName, middleName, lrn, section, adviser) {
    cardElement.classList.remove('editing');

    const header = cardElement.querySelector('.card-header');
    header.innerHTML = `
        <span class="lrn-display">${lrn || '#N/A'}</span>
        <span class="edit-button" onclick="editStudentCard(this.closest('.student-card'), '${lastName}', '${firstName}', '${middleName}', '${lrn}', '${section}', '${adviser}')">✏️</span>
        <span class="close-button" onclick="removeStudentCard(this.closest('.student-card'))">X</span>
    `;

    const cardContent = cardElement.querySelector('.card-content');
    cardContent.innerHTML = `
        <div class="full-name">${lastName ? `${lastName}, ${firstName} ${middleName}` : ''}</div>
        <div class="section-tag">${section || ''}</div>
        <div class="info">
            <div class="label">LRN</div>
            <div class="value lrn-value">${lrn || '#N/A'}</div>
        </div>
        <div class="info">
            <div class="label">Last Name</div>
            <div class="value last-name-value">${lastName || ''}</div>
        </div>
        <div class="info">
            <div class="label">First Name</div>
            <div class="value first-name-value">${firstName || ''}</div>
        </div>
        <div class="info">
            <div class="label">Middle Name</div>
            <div class="value middle-name-value">${middleName || ''}</div>
        </div>
    `;

    const cardFooter = cardElement.querySelector('.card-footer');
    cardFooter.innerHTML = `${adviser}<br>ADVISER`;
}
function printStudentCards() {
    window.print();
}

function addStudent() {
    const addStudentForm = document.getElementById('add-student-form');
    const overlay = document.getElementById('overlay');
    addStudentForm.style.display = 'block';
    overlay.style.display = 'block';

}

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('show');
            }
        });
    });
});

}