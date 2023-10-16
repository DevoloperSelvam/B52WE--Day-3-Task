// Print odd numbers in an array
let printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5]));

// Convert all the strings to title caps in a string array
let toTitleCaps = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(['hello', 'world']));

// Sum of all numbers in an array
let sumOfNumbers = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// Return all the prime numbers in an array
let getPrimes = (arr) => arr.filter(num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
});
console.log(getPrimes([1, 2, 3, 4, 5]));

// Return all the palindromes in an array
let getPalindromes = (arr) => arr.filter(str => str === str.split('').reverse().join(''));
console.log(getPalindromes(['madam', 'hello', 'radar']));
