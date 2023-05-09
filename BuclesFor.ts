function evenNumbers(number : number){
    let even : number = 0
    let i : number = 0
    let j : number = 0
    for(i = 1 ; i <= number ; i++ ){
        if(i%2 != 0){
            console.log(i)
            j = j+1
        }
    }
    return j ;
}

function myRevert(myArr : number[]){
    let rArr : number[]= []
    let i : number = 0
    for(i = myArr.length-1 ; i >= 0 ; i--){
        rArr.push(myArr[i])
    }
    return rArr ;
}

export function add(myWords : string[]){
    let i : number = 0;
    let total : number = 0
    for(i = 0; i < myWords.length; i++){
        total+= myWords[i].length
    }
  return total;
}


function isRainbow(colors : string[]){
    
    let i : number = 0    
    let arrRespuesta : string[] = []
    for(i = 0 ; i < colors.length ; i++){
       
        if(colors[i] == "yellow" || colors[i] ==  "blue" || colors[i]== "red" 
        ||colors[i] == "orange" || colors[i] == "purple" || colors[i] ==  "green" || colors[i] =="indigo")
        {
            arrRespuesta.push(colors[i] + "Esta en el arcoiris" )
        }
        else {
            arrRespuesta.push(colors[i] + "no esta en el arcoiris")
        }
    }
    return arrRespuesta;

}

