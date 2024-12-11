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

            // Check if iterated element is X and if it is then send it to check if it can move around
            if(stringArray2dInput[i][j] == "X"){ 
                lookWhereIsSpace(i,j,stringArray2dInput[i].length,stringArray2dInput.length)
            }

        }
    }
}


const lookWhereIsSpace = function(y:number,x:number,xLength:number,yLength:number){

    // if x <= 2 then it cannot look to the left.
    // if x > array.length-3 then it cannot look on the right
    // if y <= 2  it cannot look upwards
    // if y > array.length-3  it cannot look downwards

    if(canGoLeft(x)){
        
    } 

    const up:boolean = canGoUpwards(y)
    const down:boolean = canGoDownwards(y,yLength);


    const right:boolean = canGoRight(x,xLength)

    const upLeft:boolean = canGoLeftUp(left,up);
    const upRigh:boolean = canGoRightUp(right,up);

    const downLeft:boolean = canGoLeftDown(left,down);
    const downRight:boolean = canGoRightDown(right,down);

    console.log(downLeft)

}

// Checking which ones can be valid so the word "XMAS" can possibly fit towards a certain direction
const canGoLeft = function(x:number){
    if(x<=2){
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
    if(y<=2){
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
const goingLeft = function(){

}