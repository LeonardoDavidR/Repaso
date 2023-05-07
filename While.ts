function hasEven(myNums : Array<any>){
    let i : number = 0
    
    while(i < myNums.length && myNums[i]% 2 != 0){
        
        i++;
    }
    let condicicon = i < myNums.length
    return condicicon
}

function startWithM(myNames :Array <string>){
    let i : number = 0
    let sePuede :Boolean = true
    let noSePuede : Boolean = false
    while(i < myNames.length){
      
      if(myNames[i] == "M"){
        console.log(sePuede)
      }
      else if(myNames[i] != "M"){
        console.log(noSePuede)
      }
    }
  
}