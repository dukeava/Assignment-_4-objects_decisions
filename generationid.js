function determineGeneration() {
    const age = document.getElementById('ageInput').value;
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    let message;

    switch (true) {
        case (birthYear >= 1946 && birthYear <= 1964):
            message = "You are a member of the Baby Boomer Generation!";
            break;
        case (birthYear >= 1965 && birthYear <= 1980):
            message = "You are part of Generation X!";
            break;
        case (birthYear >= 1981 && birthYear <= 1996):
            message = "You belong in the Y Generation!";
            break;
        case (birthYear >= 1997 && birthYear <= 2012):
            message = "Generation Z is your generation!";
            break;
        case (birthYear >= 2013 && birthYear <= 2025):
            message = "You are part of Generation Alpha.";
            break;
        default:
            message = "Sorry - your generation is not listed.";
    }

    document.getElementById('result').innerText = message;
}
