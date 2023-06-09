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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
   //reduce un valor y lo va acumulando
   let sum = arr.reduce((a,b)=> a+b);
   
   
   let maxVal= Math.max(...arr);
   
   let minVal= Math.min(...arr);
   
   //Se suma y restamos el numero mayor o menor para obtener la suma menor o mayor
   console.log((sum - maxVal)+' '+ (sum - minVal));
   

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}