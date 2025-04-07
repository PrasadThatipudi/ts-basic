// 1. Find the maximum number in an array using apply
// Parameters: numbers (array)
// Test cases: maxNumber([3, 7, 1, 9]) => 9, maxNumber([-5, -1, -3]) => -1
const maxNumber = function (numbers: number[]): number {};

// 2. Concatenate two arrays
// Parameters: array1, array2
// Test cases: concatArrays([1, 2], [3, 4]) => [1, 2, 3, 4]
const concatArrays = function (array1: any[], array2: any[]): any[] {};

// 3. Capitalize the first letter of a string
// Parameters: str (string)
// Test cases: capitalize("hello") => "Hello", capitalize("typescript") => "Typescript"
const capitalize = function (str: string): string {};

// 4. Filter out even numbers from an array
// Parameters: numbers (array)
// Test cases: filterOdds([1, 2, 3, 4, 5]) => [1, 3, 5]
const filterOdds = function (numbers: number[]): number[] {};

// 5. Count the number of vowels in a string
// Parameters: str (string)
// Test cases: countVowels("hello") => 2, countVowels("typescript") => 3
const countVowels = function (str: string): number {};

// 6. Check if a given string is a palindrome
// Parameters: str (string)
// Test cases: isPalindrome("racecar") => true, isPalindrome("hello") => false
const isPalindrome = function (str: string): boolean {};

// 7. Merge two objects
// Parameters: obj1, obj2 (objects)
// Test cases: mergeObjects({ a: 1 }, { b: 2 }) => { a: 1, b: 2 }
const mergeObjects = function (obj1: object, obj2: object): object {};

// 8. Get unique values from an array
// Parameters: arr (array)
// Test cases: unique([1, 2, 2, 3]) => [1, 2, 3]
const unique = function (arr: number[]): number[] {};

// 9. Reverse a string
// Parameters: str (string)
// Test cases: reverseString("hello") => "olleh"
const reverseString = function (str: string): string {};

// 10. Get factorial of a number
// Parameters: num (number)
// Test cases: factorial(5) => 120, factorial(0) => 1
const factorial = function (num: number): number {};

// 11. Flatten a nested array (1 level deep)
// Parameters: arr (array)
// Test cases: flatten([1, [2, 3], 4]) => [1, 2, 3, 4]
const flatten = function (arr: any[]): any[] {};

// 12. Remove falsy values from array
// Parameters: arr (array)
// Test cases: cleanArray([0, 1, false, "", 2]) => [1, 2]
const cleanArray = function (arr: any[]): any[] {};

// 13. Get the longest word in a sentence
// Parameters: sentence (string)
// Test cases: longestWord("I love TypeScript") => "TypeScript"
const longestWord = function (sentence: string): string {};

// 14. Convert Celsius to Fahrenheit
// Parameters: celsius (number)
// Test cases: toFahrenheit(0) => 32, toFahrenheit(100) => 212
const toFahrenheit = function (celsius: number): number {};

// 15. Chunk an array into smaller arrays
// Parameters: arr (array), size (number)
// Test cases: chunk([1,2,3,4], 2) => [[1,2],[3,4]]
const chunk = function (arr: number[], size: number): number[][] {};

// 16. Get the sum of all numbers in an array
// Parameters: arr (array)
// Test cases: sum([1,2,3]) => 6
const sum = function (arr: number[]): number {};

// 17. Remove duplicates from a string
// Parameters: str (string)
// Test cases: removeDuplicates("aabbcc") => "abc"
const removeDuplicates = function (str: string): string {};

// 18. Find the intersection of two arrays
// Parameters: arr1, arr2
// Test cases: intersection([1,2,3], [2,3,4]) => [2,3]
const intersection = function (arr1: number[], arr2: number[]): number[] {};

// 19. Check if all elements in array are numbers
// Parameters: arr (array)
// Test cases: isAllNumbers([1, 2, 3]) => true, isAllNumbers([1, "a", 3]) => false
const isAllNumbers = function (arr: any[]): boolean {};

// 20. Return true if number is even
// Parameters: num (number)
// Test cases: isEven(4) => true, isEven(5) => false
const isEven = function (num: number): boolean {};

// 21. Convert a string to title case
// Parameters: str (string)
// Test cases: toTitleCase("hello world") => "Hello World"
const toTitleCase = function (str: string): string {};

// 22. Count the number of words in a string
// Parameters: sentence (string)
// Test cases: wordCount("Hello there!") => 2
const wordCount = function (sentence: string): number {};

// 23. Multiply all elements in an array
// Parameters: arr (array)
// Test cases: product([1, 2, 3, 4]) => 24
const product = function (arr: number[]): number {};

// 24. Find the first non-repeating character
// Parameters: str (string)
// Test cases: firstUnique("aabbcde") => "c"
const firstUnique = function (str: string): string {};

// 25. Convert minutes to HH:MM format
// Parameters: minutes (number)
// Test cases: toTime(135) => "02:15"
const toTime = function (minutes: number): string {};

// 26. Return array of keys from object
// Parameters: obj (object)
// Test cases: keys({a: 1, b: 2}) => ['a', 'b']
const keys = function (obj: object): string[] {};

// 27. Return array of values from object
// Parameters: obj (object)
// Test cases: values({a: 1, b: 2}) => [1, 2]
const values = function (obj: object): any[] {};

// 28. Sort an array of numbers in ascending order
// Parameters: arr (array)
// Test cases: sortAsc([3, 1, 2]) => [1, 2, 3]
const sortAsc = function (arr: number[]): number[] {};

// 29. Repeat a string n times
// Parameters: str (string), times (number)
// Test cases: repeat("a", 3) => "aaa"
const repeat = function (str: string, times: number): string {};

// 30. Replace all spaces with dashes
// Parameters: str (string)
// Test cases: dashify("hello world") => "hello-world"
const dashify = function (str: string): string {};
