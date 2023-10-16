// Print odd numbers in an array

// IIFE

(function(arr) {
    console.log(arr.filter(num => num % 2 !== 0));
})([1, 2, 3, 4, 5]);

// Convert all the strings to title caps in a string array

// IIFE

(function(arr) {
    console.log(arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
})(['hello', 'world']);

// Sum of all numbers in an array

// IIFE

(function(arr) {
    console.log(arr.reduce((a, b) => a + b, 0));
})([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array

// IIFE

(function(arr) {
    console.log(arr.filter(num => {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }));
})([1, 2, 3, 4, 5]);

// Return all the palindromes in an array

// IIFE

(function(arr) {
    console.log(arr.filter(str => str === str.split('').reverse().join('')));
})(['madam', 'hello', 'world']);

// Return median of two sorted arrays of the same size

// anonymous functions

let getMedian = function(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    let median = merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
    console.log(median);
};
getMedian([1, 2], [3, 4]);

// Remove duplicates from an array

// anonymous functions

let removeDuplicates = function(arr) {
    console.log([...new Set(arr)]);
};
removeDuplicates([1, 2, 2, 3, 4, 4]);

// Rotate an array by k times

// IIFE

(function(arr, k) {
    while(k--) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr);
})([1, 2, 3, 4], 2);





























