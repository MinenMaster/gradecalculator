function addGradeInput() {
    const container = document.getElementById('grades-container');
    const gradeInput = document.createElement('div');
    gradeInput.classList.add('grade-input');
    gradeInput.innerHTML = `
        <input type="number" placeholder="Grade" class="grade">
        <input type="number" placeholder="Weight (%)" class="weight">
    `;
    container.appendChild(gradeInput);
}

function calculateGrade() {
    const grades = document.querySelectorAll('.grade');
    const weights = document.querySelectorAll('.weight');

    let totalWeightedGrade = 0;
    let totalWeight = 0;

    grades.forEach((gradeInput, index) => {
        const grade = parseFloat(gradeInput.value);
        const weight = parseFloat(weights[index].value);

        if (!isNaN(grade) && !isNaN(weight)) {
            totalWeightedGrade += grade * (weight / 100);
            totalWeight += weight;
        }
    });

    const resultDiv = document.getElementById('result');
    if (totalWeight === 100) {
        resultDiv.textContent = `Weighted Average Grade: ${totalWeightedGrade.toFixed(2)}`;
    } else {
        resultDiv.textContent = 'Error: Total weight must equal 100%';
    }
}
