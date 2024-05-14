// Snack7
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.


let N = Number.parseInt( prompt("Insert number"), 10);

for (let index = 0; index < N; index++) {
    const tempArray = [];

    for (let k = 0; k < 10; k++) {
        tempArray.push(Math.floor( Math.random() * 100) + 1)
        
        
    }
    
    console.log(tempArray)
}

