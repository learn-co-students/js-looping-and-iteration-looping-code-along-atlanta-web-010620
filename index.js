// Code your solutions in this file
function writeCards(names, occasion){
    let return_array = [];
    for (let i = 0; i<names.length;i++){
        return_array.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    };
    return return_array;
};

function countDown(num){
    let i = 0; 
    while (i<=num){
        console.log(num-i); 
        i+=1;
    }
}