import { summarizePairs } from "./days/01/01.2.js";
import { countSimilarities } from "./days/01/01.1.js";
import { leftList, rightList } from "./days/inputs/day01Input.js";
import { input } from "./days/inputs/day02Input.js";
import {checkIfNumbersAreIncreasingOrDecrasingByTwo, countTrueFalseLines, createArraysFromStringLines, mainFunction, parseStringArrayToIntArray } from "./days/02/02.1.js";

const arr1 = [3,4,2,1,3,3]
const arr2 = [4,3,5,3,9,3]

// DAY 1.1
// console.log(smallestNum(arr1));
// smallestNum(arr1)
// console.log(summarizePairs(leftList,rightList));

// DAY 1.2
// console.log(countSimilarities(leftList,rightList));

// DAY 2

const testArray = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5,7],[1,2,3,4,5]] // 3,1
const testArray2 = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5,7],[1,2,3,4,5,7],[1,2,3,4,5,7],[1,2,3,4,5,7]]
const testArray3 = [6,5,4,3,2,1]
const testArray4 = [9,8,7,6,4,3]

const testString = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const testString2 = [10,6,4,2,1]

// const d = createArraysFromStringLines(input)
// const c = parseStringArrayToIntArray(d)
// const e = checkIfNumbersAreIncreasingOrDecrasingByTwo(c)
// const b = countTrueFalseLines(Object.values(testString));
// const a = mainFunction(testString)

// console.log(testString);
// console.log(mainFunction(testString))

// DAY 2.2
const removeAndRecreateFalseArrays = function(arr){
    let newArr = [];
    
    let splicedArr = [];
    for(let i = 0; i < arr.length; i++){
        
    }
    return newArr
}

const isSafe = function(array){
    let increasing;

    // Checking if array is increasing or decreasing
    if(array[0] < array[1]){
        increasing = true;
    }
    else{
        increasing = false;
    }

    for(let i = 0; i < array.length-1; i++){
        if(increasing && (array[i+1] === array[i]+1 || array[i+1] === array[i]+2 || array[i+1] === array[i]+3)){
            continue
        }
        else if( !increasing && (array[i+1] === array[i]-1 || array[i+1] === array[i]-2 || array[i+1] === array[i]-3)){
            continue
        }
        else{ 
            return false;
        }
    }
    return true;
}

const isSafeWithTolreation = function(array){
    for(let i = 0; i < array.length; i++){
        let newArray = [...array];
        newArray.splice(i,1)
        if(isSafe(newArray)){
            return true
        } 
    }
    return false
}

const mainFunction2 = function(arr2d){
    
    let count = 0;
    let count2 = 0;
    arr2d.forEach(array => {
        if(isSafe(array) || isSafeWithTolreation(array)){
            count++
        }
    });
    return count;
}

// const d = createArraysFromStringLines(input)
// const c = parseStringArrayToIntArray(d)
// console.log(mainFunction2(c))







