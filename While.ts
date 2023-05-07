function hasEven(myNums :number){
    let i : number = 0
    while(i%2 == 0){
        console.log(myNums);
    }
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