const mockData = require('./data.js');

let officers = mockData.officers;
let pilots = mockData.pilots;
let countries = mockData.data;
const officerIds = officers.map(officer => officer.id);

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

let pop = countries.reduce((acc, val) => {
    return val.country === 'China' ? acc : acc + val.pop;
}, 0);

// const marvelHeroes = heroes.filter(hero => hero.franchise === 'Marvel');

function palindrome(str) {
    const regex = /[^a-z0-9+]+/gi;
    return str.replace(regex, '').toUpperCase() == str.replace(regex, '').toUpperCase().split('').reverse().join('');
}

const binarySearch = (arr, x) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) return true;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid -1;
    }
    return false;
}

const bubbleSort = (arr) => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i-1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}

const flatten = (arr) => {
    let array = [];
    while (arr.length) {
        let value = arr.shift();
        if (Array.isArray(value)) {
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}
flatten([1, [2, [3]], [4]]);