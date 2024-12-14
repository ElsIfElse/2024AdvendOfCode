// Day3.1


const getStrings = function(stringInput:string){
    const reg:RegExp = /mul\(\d{1,3},\d{1,3}\)/g
        const collection:string[] | null= stringInput.match(reg);
        return collection
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
    const numberArrays:number[][] = getNumbersFromStrings(pickedOutStrings);
    const result:number = multiplyTwoNumbers(numberArrays);
    return result;
}


// Day3.2

const getDosAndDonts = function(inputString:string){
    // Getting first part of text until the first don't
    const firstRegex:RegExp = /^.*?don't\(\)/
    const firstFind:string[] | null = inputString.match(firstRegex)

    // Getting the middle part of the text and returnin all text pieces that are between do and don't
    const secondRegex:RegExp = /do(?!n)\(\).*?(?=don't\(\))/g
    const middlePart:string[] | null = inputString.match(secondRegex);

    // Getting the last part of the text from the last do until the end
    const thirdRegex:RegExp = /(do(?!n)\(\)).*$/ 
    const end:string[] | null = inputString.match(thirdRegex)

    // Summarizing all text pieces collected
    let resultArray:string[] = [...(firstFind ?? []),...(middlePart ?? []),...end ?? []] 

    console.log("First: ",firstFind)
    console.log("Second: ",middlePart)   
    console.log("End: ",end)

    const result:string = resultArray.join()
    console.log("Summary: ",result)  

    return result 
}

export const day3MainFunction2 = function(string:string){
    const doDontString:string | null = getDosAndDonts(string)
    const pickedOutStrings: string[] | null = getStrings(doDontString)
    const numberArrays:number[][] = getNumbersFromStrings(pickedOutStrings);
    const result:number = multiplyTwoNumbers(numberArrays);
    return result;
}

// regex to get mul && do && dont't and tell the index of the string
// all in order into an array
// iterate through it and have a bool "enabled" 
// state machine 
