const arr01 = [3,4,2,1,3,3]
const arr02 = [4,3,5,3,9,3]

export const countSimilarities = function(arr1,arr2){
    let repeatNum = 0;
    let result = 0;
    
    for(let i = 0;i < arr1.length;i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                repeatNum += 1;
            }
            result += repeatNum*arr1[i]
            repeatNum = 0;
        }
    }
    return result
}

