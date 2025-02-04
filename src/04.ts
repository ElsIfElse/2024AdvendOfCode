// Day 4.1

import { fail } from "assert";
import { log } from "console";
import { findSourceMap } from "module";
import { stringify } from "querystring";

export const day4MainFunction = function(stringInput:string){
    const stringArray:string[] =  makeStringIntoArray(stringInput);
    const stringArray2d:string[][] = makeStringArrayInto2dArray(stringArray);
    const a = lookForX(stringArray2d);
    return a
}

// Making array into lines of arrays
const makeStringIntoArray = function(stringInput:string){
    const match:string[] = stringInput.split("\n");
    return match
}

// Creating 2d arrays by splitting letters inside the lines to have a coordinate system thingy
const makeStringArrayInto2dArray = function(stringArrayInput:string[]){
    let stringArray2d:string[][] = [];


    for(let i = 0; i < stringArrayInput.length;i++){
        let arrayLine: string[] = [];

        for(let j = 0; j < stringArrayInput[i].length;j++){
          arrayLine.push(stringArrayInput[i][j])
        }  

         stringArray2d.push(arrayLine);
    }

    
    return stringArray2d
}

// Iterating through all elements
const lookForX = function(stringArray2dInput:string[][]){
    let sum:number = 0;
    for(let i = 0; i < stringArray2dInput.length;i++){
        for(let j = 0;j < stringArray2dInput[i].length;j++){

            // Check if iterated element is X and if it is then send it to check if it can move around
            if(stringArray2dInput[i][j] == "X"){ 
                sum += lookWhereIsSpace(i,j,stringArray2dInput[i].length,stringArray2dInput.length,stringArray2dInput)
                // console.log(i,j)
            }
        }
    }
    return sum;
}
const lookWhereIsSpace = function(y:number,x:number,xLength:number,yLength:number,array:string[][]){

    // if x <= 2 then it cannot look to the left.
    // if x > array.length-3 then it cannot look on the right
    // if y <= 2  it cannot look upwards
    // if y > array.length-3  it cannot look downwards

    let summaryNum:number = 0;
    const up:boolean = canGoUpwards(y)
    const down:boolean = canGoDownwards(y,yLength);

    const left:boolean = canGoLeft(x)
    const right:boolean = canGoRight(x,xLength)

    const upLeft:boolean = canGoLeftUp(left,up);
    const upRight:boolean = canGoRightUp(right,up);

    const downLeft:boolean = canGoLeftDown(left,down);
    const downRight:boolean = canGoRightDown(right,down);

    if(left){
        summaryNum += goingLeft(y,x,array)
    }
    if(right){
        summaryNum += goingRigth(y,x,array)
    }
    if(up){
        summaryNum += goingUp(y,x,array)
    }
    if(down){
        summaryNum += goingDown(y,x,array)
    }

    if(upLeft){
        summaryNum += goingUpLeft(y,x,array)
    }
    if(upRight){
        summaryNum += goingUpRight(y,x,array)
    }
    if(downRight){
        summaryNum += goingDownRight(y,x,array)
    }
    if(downLeft){
        summaryNum += goingDownLeft(y,x,array)
    }
    else{
        return summaryNum
    }

    return summaryNum
}

// Checking which ones can be valid so the word "XMAS" can possibly fit towards a certain direction
const canGoLeft = function(x:number){
    if(x<3){
        return false;
    }
    return true;
}
const canGoRight = function(x:number,xLength:number){
    if(x>xLength-4){
        return false;
    }
    return true;
}
const canGoUpwards = function(y:number){
    if(y<3){
        return false;
    }
    return true;
}
const canGoDownwards = function(y:number,yLength:number){
    if(y>yLength-4){
        return false;
    }
    return true;
}
const canGoLeftUp = function(left:boolean,up:boolean){
    if(left && up){
        return true
    }
    return false;
}
const canGoRightUp = function(right:boolean,up:boolean){
    if(right && up){
        return true
    }
    return false;
}
const canGoLeftDown = function(left:boolean,down:boolean){
    if(left && down){
        return true
    }
    return false;
}
const canGoRightDown = function(right:boolean,down:boolean){
    if(right && down){
        return true
    }
    return false;
} 

// Checking if the following letters towards the valid paths are correct or not
const goingLeft = function(y:number,x:number,array:string[][]){
    if(array[y][x-1] === "M" && array[y][x-2] === "A" && array[y][x-3] === "S"){
        return 1
    }
    else{
        return 0
    }
}
const goingRigth = function(y:number,x:number,array:string[][]){
    if(array[y][x+1] === "M" && array[y][x+2] === "A" && array[y][x+3] === "S"){
        return 1
    }
    else{
        return 0
    }
}
const goingUp = function(y:number,x:number,array:string[][]){
        if(array[y-1][x] === "M" && array[y-2][x] === "A" && array[y-3][x] === "S"){
        return 1
    } 
    else{
        return 0
    }
}
const goingDown= function(y:number,x:number,array:string[][]){
    if(array[y+1][x] === "M" && array[y+2][x] === "A" && array[y+3][x] === "S"){
        return 1
    }
    else{
        return 0
    }
}
const goingUpRight= function(y:number,x:number,array:string[][]){
    if(array[y-1][x+1] === "M" && array[y-2][x+2] === "A" && array[y-3][x+3] === "S"){
        return 1
    }
    else{
        return 0
    }
}
const goingUpLeft= function(y:number,x:number,array:string[][]){
    if(array[y-1][x-1] === "M" && array[y-2][x-2] === "A" && array[y-3][x-3] === "S"){
        return 1
    }
    else{
        return 0
    }
}
const goingDownRight= function(y:number,x:number,array:string[][]){
    if(array[y+1][x+1] === "M" && array[y+2][x+2] === "A" && array[y+3][x+3] === "S"){
        return 1
    }
    else{
        return 0
    }
}
const goingDownLeft= function(y:number,x:number,array:string[][]){
    if(array[y+1][x-1] === "M" && array[y+2][x-2] === "A" && array[y+3][x-3] === "S"){
        return 1
    }
    else{
        return 0
    }
}

// Day 4.2

export const day4MainFunction2 = function(inputString:string){
    const array2D:string[] = inputString.split("\n")
    const coordinates:number[][] = checkForLetters(array2D)
    let result:number = isItValidX(coordinates,array2D)
    
    return result
}
const checkForLetters = function(stringArray:string[]){
    let coordinates:number[][] = []

    for(let i = 0; i < stringArray.length; i++){
        for(let j = 0; j < stringArray[i].length; j++){
            let coordPair:number[] = [i,j]
            if(stringArray[i][j] == "A" 
                && i > 0 
                && i < stringArray.length -1
                && j > 0 
                && j < stringArray[i].length-1){
                coordinates.push(coordPair) 
            }
        }
    }
    
    return coordinates
}
const leftUpDownRight = function(y:number,x:number,stringArray:string[]){

    if((stringArray[y+1][x-1] == "M" && stringArray[y-1][x+1]== "S") || (stringArray[y+1][x-1] == "S" && stringArray[y-1][x+1]== "M")){   

        return true  
    }       
    return false
}
const rightUpDownLeft = function(y:number,x:number,stringArray:string[]){
    if((stringArray[y+1][x+1] == "M" && stringArray[y-1][x-1]== "S") || (stringArray[y+1][x+1] == "S" && stringArray[y-1][x-1] == "M")){

        return true
    }
    return false
}
const isItValidX = function(coordinates:number[][],array2D:string[]){
    let result:number = 0;
    for(let i = 0;i < coordinates.length; i++){
        let a: boolean = leftUpDownRight(coordinates[i][0],coordinates[i][1],array2D)
        let b: boolean = rightUpDownLeft(coordinates[i][0],coordinates[i][1],array2D)
        if(a == true && b == true){
            result += 1
        }
    }
    return result
}
// i+1 j-1, i+1 j+1, i-1 j-1, i-1 j+1