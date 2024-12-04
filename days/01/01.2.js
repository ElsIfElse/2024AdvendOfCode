const arr01 = [3,4,2,1,3,3]
const arr02 = [4,3,5,3,9,3]

export const sortArray = function(arr){
    let initNum = arr[0];
    let newArr = []
    for(let i = 0;i <  arr.length-1;i++){
        for(let j = i+1;j < arr.length;j++){
            if(arr[j] < arr[i]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

export const summarizePairs = function(arr1,arr2){

    let firstSorted = sortArray(arr1)
    let secondSorted = sortArray(arr2)
    let result = 0
    console.log(firstSorted,secondSorted);
    

    for(let i = 0; i < arr1.length;i++){
        if(firstSorted[i] > secondSorted[i]){
            result += firstSorted[i] - secondSorted[i]
        }
        else{
            result += secondSorted[i] - firstSorted[i]
        }
       
    }

    return result
}



