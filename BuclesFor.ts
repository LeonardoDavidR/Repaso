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

function myRevert(myArr : Array <any>){
    let rArr : Array<any>= []
    let i : number = 0
    for(i = myArr.length-1 ; i >= 0 ; i--){
        rArr.push(myArr[i])
    }
    return rArr ;
}

function add(myWords){
    let i : number = 0;
    let total=0
    for(i = 0; i < myWords.length; i++){
        total+= myWords[i]
    }
  return total;
}


function isRainbow(colors : Array<string>){
    
    let i : number = 0    
    let arrRespuesta : Array<any> = []
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

