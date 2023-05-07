function Zodiac (day : number , month : number ){
    let zodiaco : string = "";
    if(day >= 21 && month == 3 || day <= 20 && month == 4){
        zodiaco = "Aries"
        
    };
    if(day >= 21 && month == 4 || day <= 20 && month == 5){
        zodiaco = "Tauro"
        
    };
    if(day >= 21 && month == 5 || day <= 20 && month == 6 ){
        zodiaco = "Geminis";
    };
    if(day >= 21 && month == 6 || day <= 22 && month == 7){
        zodiaco = "cancer"
    };
    if(day >= 23 && month == 7 || day <= 23 && month == 8){
        zodiaco = "Leo"
    };
    if(day >= 24 && month == 8 || day <= 22 && month == 9){
        zodiaco = "Virgo"
    };
    if(day >= 23 && month == 9 || day <= 23 && month == 10){
        zodiaco = "Libra"
    };
    if(day >= 24 && month == 10 || day <= 22 && month == 11 ){
        zodiaco = "Escorpio"
    };
    if(day >= 23 && month == 11 || day <= 21 && month == 12){
        zodiaco = "Sagitario"
    };
    if(day >= 22 && month == 12 || day <= 20 && month == 1){
        zodiaco = "Capricornio"
    }
    if(day >= 21 && month == 1 || day <= 19 && month == 2){
        zodiaco = "Acuario"
    }
    if(day >= 20 && month == 2 || day <= 20 && month == 3){
        zodiaco = "Piscis"
    }

    return zodiaco;

}

function continent(country : string){
    let continent : string = ""
    if(country == "Spain" || country == "Germany" || country == "Italy" || country == "Chipre" || country == "Greece"  ){
        continent = "Europe"
        console.log(continent)
    };
    if(country == "Colombia" || country == "Brazil" || country == "Venezula" ||country == "Mexico" || country == "Peru"){
        continent = "America"
        console.log(continent)
    };
    if(country == "Morocco" || country == "South Africa" || country == "Ghana" || country == "Zimbabwe" || country == "Madagascar" ){
        continent = "Africa"
        console.log(continent)
    };
    if(country == "Japan" || country == "China" || country == "Rusia" || country == "Turkey" || country == "North Korea" ){
        continent = "Asia"
        console.log(continent)
        
    };
    if(country == "Australia" || country == "New Zeland" || country == "Samoa" || country =="Palaos" || country == "Federated States Of Micronesia"){
        continent = "Oceania"
        console.log(continent)
    }
    if(country == ""){
        continent = "Antartida"
        console.log(continent)
    }
    
}

export function isEven(number : number){
    let even : string = ""
    if( number%2 == 0 ){
        even = "Es par"
    }
    else{
        even = "Es impar"
    }
    return even;

}


