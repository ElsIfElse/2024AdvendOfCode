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

const testString2 = `7 6 4 2 1`


const d = createArraysFromStringLines(testString)
const c = parseStringArrayToIntArray(d)
const e = checkIfNumbersAreIncreasingOrDecrasingByTwo(c)
const b = countTrueFalseLines(Object.values(testString));
const a = mainFunction(testString)


// console.log(testString);
// console.log(mainFunction(testString))

// DAY 2.2
const removeAndRecreate = function(arr){
    let newArr = [];
    for(let i = 0;i < arr.length;i++){
        for(let j = 0; j < arr[i].length; j++){
            newArr = arr[i].filter((item)=>{
                return item !== arr[i][j];
            })
            console.log(newArr)
        }
    }
}

removeAndRecreate(c)







