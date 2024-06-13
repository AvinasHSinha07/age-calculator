// script.js
function calculateDifference() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);

    if (!date1 || !date2) {
        alert("Please select both dates.");
        return;
    }

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365.25);
    const diffMonths = Math.floor((diffDays % 365.25) / 30.4375);
    const remainingDays = Math.floor((diffDays % 365.25) % 30.4375);
    const diffWeeks = Math.floor(remainingDays / 7);
    const finalDays = remainingDays % 7;

    document.getElementById('yearsOutput').innerText = diffYears;
    document.getElementById('monthsOutput').innerText = diffMonths;
    document.getElementById('weeksOutput').innerText = diffWeeks;
    document.getElementById('daysOutput').innerText = finalDays;
}
