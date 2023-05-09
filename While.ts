function hasEven(myNums : number[]){
    let i : number = 0
    
    while(i < myNums.length && myNums[i]% 2 != 0){
        
        i++;
    }
    let condicicon = i < myNums.length
    return condicicon
}

function startWithM(myNames :string[]){
    let i : number = 0
   
    while(i < myNames.length && myNames[i].startsWith("M")){
      i++
    }
    let con = i < myNames.length;
    return con
  
}

let nombres = ["Maria", "Carlos", "Matias"]
startWithM(nombres);
console.log(startWithM(nombres))