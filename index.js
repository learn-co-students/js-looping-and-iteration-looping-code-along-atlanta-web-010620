function writeCards(gifts, event) {
    let temp = [];
    for (let i = 0; i < gifts.length; i++) {
        temp.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`)
    }
    return temp;
}

function countDown() {
    let countdown = 10;
    while (countdown > -1) {
        console.log(countdown--);
    }
}