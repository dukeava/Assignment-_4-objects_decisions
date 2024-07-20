function calculateFutureDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const inputDay = document.getElementById('dayInput').value.trim();
    const dayIndex = daysOfWeek.indexOf(inputDay.charAt(0).toUpperCase() + inputDay.slice(1).toLowerCase());

    if (dayIndex !== -1) {
        const futureDayIndex = (dayIndex + 5) % 7;
        const futureDay = daysOfWeek[futureDayIndex];
        document.getElementById('dayResult').innerText = `It will be ${futureDay} in 5 days.`;
    } else {
        document.getElementById('dayResult').innerText = "Invalid day input.";
    }
}
