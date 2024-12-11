export const day4MainFunction = function(stringInput:string){
    const stringArray:string[] =  makeStringIntoArray(stringInput);
    const stringArray2d:string[][] = makeStringArrayInto2dArray(stringArray);
    const a = lookForX(stringArray2d);
    // return stringArray2d
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

// Creating all coordinate possibilites
const lookForX = function(stringArray2dInput:string[][]){
    for(let i = 0; i < stringArray2dInput.length;i++){
        for(let j = 0;j < stringArray2dInput[i].length;j++){
 
            console.log(lookWhereIsSpace(i,j,stringArray2dInput[i].length,stringArray2dInput.length))
        }
    }
}

// Checking wwich ones can be valid so the word "XMAS" can possibly fit towards a certain direction
const lookWhereIsSpace = function(y:number,x:number,xLength:number,yLength:number){

    // if x <= 2 then it cannot look to the left.
    // if x > array.length-3 then it cannot look on the right
    // if y <= 2  it cannot look upwards
    // if y > array.length-3  it cannot look downwards

    console.log(y,x)
}


const lookLeft = function(){

}
