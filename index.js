import { summarizePairs } from "./days/01/01.2.js";
import { countSimilarities } from "./days/01/01.1.js";
import { leftList, rightList } from "./days/inputs/day01Input.js";
import { input } from "./days/inputs/day02Input.js";
import {checkIfNumbersAreIncreasingOrDecrasingByTwo, countTrueFalseLines, createArraysFromStringLines, mainFunction, parseStringArrayToIntArray } from "./days/02/02.js";

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

const testString = `1 3 2 4 5`



const d = createArraysFromStringLines(testString)
const c = parseStringArrayToIntArray(d)
const e = checkIfNumbersAreIncreasingOrDecrasingByTwo(c)
const b = countTrueFalseLines(Object.values(testString));
const a = mainFunction(testString)


console.log(testString);
console.log(mainFunction(input))






