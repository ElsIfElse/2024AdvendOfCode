export const mainFunction = function(inputStringLines){
    const stringArray = createArraysFromStringLines(inputStringLines)
    const intArray = parseStringArrayToIntArray(stringArray)
    const trueFalseNum = countTrueFalseLines(intArray)
    return trueFalseNum
}

export const createArraysFromStringLines = function(inputStringLines){
    const array =  inputStringLines.split("\n")   
    let resultArr = [];
    for(let i = 0;i < array.length; i++){
        resultArr.push(array[i].split(" "))
    }
    return resultArr;
}

export const parseStringArrayToIntArray = function(stringArray){
    const resultArr1 = [];
    let resultArr2 = []
    for(let i = 0;i < stringArray.length; i++){
        for(let j  = 0;j < stringArray[i].length;j++){
            let parsedElement = parseInt(stringArray[i][j])
            resultArr2.push(parsedElement)
        }
        resultArr1.push(resultArr2) 
        resultArr2 = []
    }
    return resultArr1
}

export const checkIfNumbersAreIncreasingOrDecrasingByTwo = function(array){
    let result
    let increasing;
    let falseArray = [];
    if(array[0] < array[1]){
        increasing = true;
    }
    else{
        increasing = false;
    }
    for(let i = 0; i < array.length-1; i++){
        if(increasing && (array[i+1] === array[i]+1 || array[i+1] === array[i]+2 || array[i+1] === array[i]+3)){
            result = true
        }
        else if( !increasing && (array[i+1] === array[i]-1 || array[i+1] === array[i]-2 || array[i+1] === array[i]-3)){
            result = true
        } 
        else{
            return false
        }
    }
    return result
}

export const countTrueFalseLines = function(arr){
    let trueLines = 0;
    let falseLines = 0;
    for( let i = 0; i < arr.length; i++){
        const result = checkIfNumbersAreIncreasingOrDecrasingByTwo(arr[i])
        if(result === false){
            falseLines += 1
        }
        else{
            trueLines += 1
        }
    }
    return [trueLines,falseLines];
}


