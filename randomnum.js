function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    let message;

    switch (randomNumber) {
        case 1:
            message = "1: The lowest number you can get";
            break;
        case 2:
            message = "2: This is the lowest even number you can get";
            break;
        case 3:
            message = "3: Right smack in the middle";
            break;
        case 4:
            message = "4: Good number!";
            break;
        case 5:
            message = "5: Way to roll!";
            break;
    }

    document.getElementById('randomResult').innerText = message;
}
