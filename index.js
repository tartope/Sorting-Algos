// JS built-in sort method doesn't always work the way we want
// console.log([6,4,15,10].sort()); // [ 10, 15, 4, 6 ]

//Tell JS how to sort.  The built-in sort method accepts an optional comparator function:
// sorts ascending order:
// function numberCompare(num1, num2){
//   return num1 - num2;
// }

// console.log([6,4,15,10].sort(numberCompare));  // [ 4, 6, 10, 15 ]

//sorts descending order:
// function numberCompare(num1, num2){
//   return num2 - num1;
// }

// console.log([6,4,15,10].sort(numberCompare));  // [ 15, 10, 6, 4 ]

//sort by length of string:
// function compareByLen(str1, str2){
//   return str1.length - str2.length;
// }
// console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));  //[ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
// _______________________________________

//Bubble Sort:
//-Before we sort, we must swap
//-Many sorting algorithms involve some type of swapping functionality (eg. swapping two numbers to put them in order)
//ES5 syntax for swapping:
//pass in array, index 1 and index 2
// function swap(arr, idx1, idx2){
//   //save idx1 to a variable
//   let temp = arr[idx1];
//   //assign idx2 to idx1
//   arr[indx1] = arr[idx2];
//   //assign temp to idx2
//   arr[idx2] = temp;
// }

// //ES2015 syntax for swapping:
// const swap = (arr, idx1, idx2) =>{
//   //reassign idx2 to idx1 and idx1 to idx2
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

//Examples of BubbleSort:

//this function re-compares the last number even though it does not need to:
//define a function called bubbleSort that takes in an array (assume it's all numbers)
// function bubbleSort(arr){
//   for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//       console.log("arr: ", arr, arr[j], arr[j+1])
//       //if arr[j] is greater than arr[j+1], swap those two values
//       if(arr[j] > arr[j+1]){
        
//         //ES5 swap
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
        
//         //ES2015 swap
//         // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   //return the sorted array
//   return arr;
// }

// console.log(bubbleSort([37,45,29,8])); //[ 8, 29, 37, 45 ]


//updated function that does not need to re-compare the last number it just sorted:
//define a function called bubbleSort that takes in an array (assume it's all numbers)
// function bubbleSortTwo(arr){
//   //start looping from the end of the array (array's length; the example belows array length is 4) to the beginning with a variable call i
//   for(let i=arr.length; i>0; i--){
//     console.log(arr[i])
//     //start an inner loop with a variable called j from the beginning until i-1 (the example blow would end at the second to last index (j<i-1))
//     for(let j=0; j<i-1; j++){
//       //if arr[j] is greater than arr[j+1], swap those two values
//       if(arr[j] > arr[j+1]){
        
//         //ES5 swap
//         // let temp = arr[j];
//         // arr[j] = arr[j+1];
//         // arr[j+1] = temp;
        
//         //ES2015 swap
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   //return the sorted array
//   return arr;
// }

// function bubbleSortTwo(arr){
//   let counter = arr.length
  
//   while(counter > 0){
//     for(let j=0; j<counter-1; j++){
//       //if arr[j] is greater than arr[j+1], swap those two values
//       if(arr[j] > arr[j+1]){
        
//         //ES5 swap
//         // let temp = arr[j];
//         // arr[j] = arr[j+1];
//         // arr[j+1] = temp;
        
//         //ES2015 swap
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//     counter--;
//   }
//   //return the sorted array
//   return arr;
// }

// 0 < 0
// i= 0
// j= 0

//[37,45,29,8]
// i
//       j
//         j+1

// console.log(bubbleSortTwo([37,45,29,8])); //[ 8, 29, 37, 45 ]
// console.log(bubbleSortTwo([37,45,29,8,12,88,-3])); //[-3,  8, 12, 29, 37, 45, 88]

//BubbleSort with swap function:
// function bubbleSortThree(arr){
//   const swap = (arr, idx1, idx2) =>{
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   };
//   for(let i=arr.length; i>0; i--){
//     for(let j=0; j<i-1; j++){
//       if(arr[j] > arr[j+1]){
//         swap(arr, j, j+1);
//       }
//     }
//   }
//   //return the sorted array
//   return arr;
// }
//Time complexity is Quadratic O(n^2) b/c of the nested loop

// // console.log(bubbleSortThree([37,45,29,8])); //[ 8, 29, 37, 45 ]
// console.log(bubbleSortThree([37,45,29,8,12,88,-3])); //[-3,  8, 12, 29, 37, 45, 88]

//Optimized BubbleSort for NEARLY sorted arrays:
//this function avoids comparing things that are already sorted
function bubbleSortFour(arr){
  //set a no swaps variable that changes based on where we are at in the code
  let noSwaps;
  //start looping from the end of the array (array's length; the example belows array length is 4) to the beginning with a variable call i
  for(let i=arr.length; i>0; i--){
    //original loop so no swaps have been done yet, so set to true
    noSwaps = true;
    //start an inner loop with a variable called j from the beginning until i-1 (the example blow would end at the second to last index (j<i-1))
    for(let j=0; j<i-1; j++){
      // console.log("ex: ", arr, arr[j], arr[j+1])
      //if arr[j] is greater than arr[j+1], swap those two values
      if(arr[j] > arr[j+1]){
        
        //ES5 swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        //swaps happening here, so set to false
        noSwaps = false;
      }
    }
    if(noSwaps) break;
    console.log("No swaps made")
  }
  //return the sorted array
  return arr;
}
// //Time complexity is Linear O(n) due to noSwap optimization
console.log(bubbleSortFour([8,1,2,3,4,5,6,7]));

//no swaps = false
// 0 < 8
// i= 7
// j= 0
//[1,8,2,3,4,5,6,7]
//               i
//   j j1


// const found = arr1.filter(num => num === arr2[i])
//             result.push(found);
//             console.log(result)

// const arr1 = [2,3,1,3,2,4,6,7,9,2,19]
// const arr2 = [2,1,4,3,9,6]
// const arr1 = [28,6,22,8,44,17]
// const arr2 = [22,28,8,6]
// // Output: [22,28,8,6,17,44]
// //Practice leetcode 1122. Relative Sort Array
// var relativeSortArray = function(arr1, arr2) {
//     const ascending = (num1, num2) =>{
//         return num1 - num2;
//     };
//     let segment = [];
//     let result = [];
//     // loop through array2
//     for(let i=0; i<arr2.length; i++){
//       //loop through array1
//       for(let j=0; j<arr1.length; j++){
//         //if array1 includes a value of array2
//         if(arr1.includes(arr2[i])){
//           //if array2 and array1 are the same
//           if(arr2[i] === arr1[j]){
//               //push array1 to result
//               result.push(arr1[j]);
//           }
//         }
//         //if arr2 does not include in arr1[j] AND segment does not include arr1[j], then push it to segment array
//         if(!arr2.includes(arr1[j]) && !segment.includes(arr1[j])){
//           segment.push(arr1[j])
//           // console.log(segment)
//         }
//       }
//     }
//     segment.sort(ascending)
//   // console.log(segment)
//   return result.concat(segment);
// };


// // Output: [2,2,2,1,4,3,3,9,6,7,19]
// console.log(relativeSortArray(arr1, arr2))