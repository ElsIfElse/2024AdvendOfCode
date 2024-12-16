import { input } from "./inputs/day03Input";
import {day04Input} from "./inputs/day4Input";
import { day3MainFunction, day3MainFunction2 } from "./03";
import { day4MainFunction, day4MainFunction2 } from "./04";

const exampleStringDay3:string = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
const exampleStringDay4:string = 
`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

// Day 3.1

// const a = day3MainFunction(input);

// Day 3.2

// const b = day3MainFunction2(input) 
// console.log(b) 

//day 4.1
// const day04Result:number = day4MainFunction(day04Input)
// console.log(day04Result) 

// day 4.2
const day04Result2:any = day4MainFunction2(day04Input);
console.log(day04Result2);

 

