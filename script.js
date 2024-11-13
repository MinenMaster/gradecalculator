// Funktion für Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
};

// Dark Mode Präferenz aus dem Local Storage laden
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

document
    .getElementById("toggle-dark-mode")
    .addEventListener("click", toggleDarkMode);

function addGradeInput() {
    const container = document.getElementById("grades-container");
    const gradeInput = document.createElement("div");
    gradeInput.classList.add("grades");

    gradeInput.innerHTML = `
        <input type="number" placeholder="Grade" class="grade" oninput="calculateGrade()">
        <input type="number" placeholder="Weight (%)" class="weight" oninput="calculateGrade()" value="100">
    `;

    container.appendChild(gradeInput);
}

// Funktion zur Berechnung des gewichteten Durchschnitts
function calculateGrade() {
    const grades = document.querySelectorAll(".grade");
    const weights = document.querySelectorAll(".weight");

    let totalWeightedGrade = 0;
    let totalWeight = 0;

    grades.forEach((gradeInput, index) => {
        const grade = parseFloat(gradeInput.value);
        const weight = parseFloat(weights[index].value);

        if (!isNaN(grade) && !isNaN(weight) && grade >= 0 && weight >= 0) {
            totalWeightedGrade += grade * (weight / 100);
            totalWeight += weight;
        }
    });

    const resultDiv = document.getElementById("result");
    if (totalWeight > 0) {
        const weightedAverage = (
            totalWeightedGrade /
            (totalWeight / 100)
        ).toFixed(2);
        resultDiv.textContent = `Weighted Average Grade: ${weightedAverage}`;
    } else {
        resultDiv.textContent = "Please enter valid weights and grades.";
    }
}

function resetCalculator() {
    document.getElementById("grades-container").innerHTML = "";
    document.getElementById("result").textContent =
        "Please enter valid weights and grades.";

    addGradeInput();
    addGradeInput();
    addGradeInput();
}

addGradeInput();
addGradeInput();
