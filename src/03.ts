const getStrings = function(stringInput:string){
    const reg:RegExp = /mul\(\d{1,3},\d{1,3}\)/g
        const collection:string[] | null= stringInput.match(reg);
        return collection; 
}

const getNumbersFromStrings = function(stringArray:string[] | any){
    const reg:RegExp = /\d+.*?/g;
    let newArr:number[][] = [];
    for(let i = 0; i < stringArray.length; i++){
        newArr.push(stringArray[i].match(reg))
    }
    return newArr
}

const multiplyTwoNumbers = function(numArr:number[][]){
    let result:number = 0;
    for(let i = 0; i < numArr.length;i++){
        result += numArr[i][0]*numArr[i][1]
    }
    return result
}

export const day3MainFunction = function(string:string){
    const pickedOutStrings: string[] | any = getStrings(string)
    console.log("picked out strings: "+pickedOutStrings)
    const numberArrays:number[][] = getNumbersFromStrings(pickedOutStrings);
    const result:number = multiplyTwoNumbers(numberArrays);
    return result;
}



