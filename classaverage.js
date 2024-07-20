function calculateAverage() {
    const scores = [87, 56, 92, 77];
    const sum = scores.reduce((acc, val) => acc + val, 0);
    const average = sum / scores.length;
    let message;

    if (average > 75) {
        message = "You are in the top 25% of the class!";
    } else if (average >= 60) {
        message = "You passed the class!";
    } else {
        message = "Sorry - you did not pass the class. Better luck next time!";
    }

    document.getElementById('averageResult').innerText = message;
}
