// Code your solutions in this file
function writeCards(arrayOfNames, event) {
    let thankYouCards = []

    for (let i = 0; i < arrayOfNames.length; i++) {
        thankYouCards.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}