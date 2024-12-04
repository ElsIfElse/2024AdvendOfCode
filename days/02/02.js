export const mainFunction = function(inputStringLines){
    const arr = inputStringLines.split('\n'); 
    let newarr = []
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
        newarr.push(arr[i][j].split(" "))
       }
       
    }
    
}