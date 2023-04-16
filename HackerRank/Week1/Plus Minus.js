'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    //Corta los numeros positivos y tambien divide la cantidad total de numeros
   let positives= arr.filter(num=>num>0).length/arr.length
    //Corta los numeros negativos y tambien la cantidad total de numeros
    let negatives= arr.filter(num=>num<0).length/arr.length
    //Corta los ceros y tambien la cantidad total de numeros
    let zeros=arr.filter(num=>num==0).length/arr.length
    
    return console.log(positives.toFixed(6)+ '\n'+negatives.toFixed(6)+'\n'+ zeros.toFixed(6));
   
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
