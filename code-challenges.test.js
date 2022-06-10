// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { resourceLimits } = require("worker_threads")

// const { resourceLimits } = require("worker_threads")

// const { NamespaceKind } = require("@sinclair/typebox")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeAndShuf", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]   
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      it("matches even if received contains additional elements, () =>  {
           expect(removeAndShuf (colors1)).toequal("yellow", "blue", "pink", "green")
           expect(removeAndShuf (colors2)).toequal("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
        })
})
// 
//red test result
// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.751 s, estimated 1 s
// Ran all test suites.


// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.
//pseudo code
// create a function named remShuf
// takes in an array
// output an array with the first value taken out and the remaining values shuffled
//

const shuffleArray = (array) => {
let newArray = array.shift()   // to remove first value in the array
  
     for (let i = newArray.length -1; i > 0; i--) {  //for loop
        const j = Math.floor(Math.random() * i + 1);    // to generate random number
        const temp = newArray[i];
        newArray[i] = newArray [j];
        newArray[j] = temp;
          
    }
   return newArray     
 }
// Green light test 
// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.784 s
// Ran all test suites.
//Tried to refactor to make green test pass but failed

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.



// a) Create a test with expect statements for each of the variables provided.
// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]

describe("minMax", () => {
    it("returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
      expect(minMax(nums1)).toEqual("[-8, 90]")
      expect(minMax(nums2)).toEqual("[5, 109]")
      
    })
  })
// Red test result:
//● minMax › returns an array of the minimum and maximum numbers in that order

// ReferenceError: minMax is not defined

// 64 |         const nums1 = [3, 56, 90, -8, 0, 23, 6]
// 65 |         const nums2 = [109, 5, 9, 67, 8, 24]
// > 66 |       expect(minMax(nums1)).toEqual("[-8, 90]")
//    |       ^
// 67 |       expect(minMax(nums2)).toEqual("[5, 109]")
// 68 |       
// 69 |     })

// at Object.expect (code-challenges.test.js:66:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total



// b) Create the function that makes the test pass.

//pseudo code
//creat function named minMax
//takes an array
// initiate an empty minMax 
// use spread operator to expand the array to show its individual values
// to get the smallest value using the Math.min method
//to get the largest value using the Math.max methed
// use push method to move minNum and maxNum values to minMax
const minMax = (array) => {
    let minMax =[]
    let minNum = Math.min(...array)
    let maxNum = Math.max(...array)
    minMax.push(minNum,maxNum)
    return minMax
}   





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("arrayNoDups", () => {
     const testArray1 = [3, 7, 10, 5, 4, 3, 3]
     const testArray2 = [7, 8, 2, 3, 1, 5, 4] 
    it("takes in two arrays and returns an array with no duplicate values", () => {
     expect(combined(testArray1, testArray2)).toEqual("[3, 7, 10, 5, 4, 8, 2, 1]")
    })
// })      
//Red test result:
// ● arrayNoDups › takes in two arrays and returns an array with no duplicate values

//     ReferenceError: combined is not defined

//       90 |      const testArray1 = [3, 7, 10, 5, 4, 3, 3]
//       91 |      const testArray2 = [7, 8, 2, 3, 1, 5, 4] 
//     > 92 |       expect(combined(testArray1, testArray2)).toEqual("[3, 7, 10, 5, 4, 8, 2, 1]")
//          |       ^
//       93 |     })
//       94 | })      
//       95 |

//       at Object.expect (code-challenges.test.js:92:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total


// b) Create the function that makes the test pass.
// pseudo code
// function named arrayNoDups
// input ---> two parameters -arrays
// output ---> arrays combined and duplicate values removed
// using spread operator to expand arrays to individual element
// using set to get rid of the duplicates
    
const arrayNoDups = (array1, array2) => {
    let set = new Set ([...array1, ...array2])
    let newArray = [...set]
    return newArray
       }

// Green test result:
// ● arrayNoDups › takes in two arrays and returns an array with no duplicate values

// ReferenceError: combined is not defined

// 90 |      const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// 91 |      const testArray2 = [7, 8, 2, 3, 1, 5, 4] 
// > 92 |      expect(combined(testArray1, testArray2)).toEqual("[3, 7, 10, 5, 4, 8, 2, 1]")
//    |      ^
// 93 |     })
// 94 | })      
// 95 | //Red test result:

// at Object.expect (code-challenges.test.js:92:6)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.424 s, estimated 1 s
// Ran all test suites.

// Green test failed and tried to refactor but with no success