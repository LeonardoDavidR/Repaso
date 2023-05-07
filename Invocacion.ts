import { add } from "./BuclesFor";
import { isEven } from "./Condicionales";

let arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2 = ["Barco" , "Baca", "Bicicleta" , "Balon" , "Bisiesto", "Brasil"];
let arr3 = ["Venezuela", "Veneno" , "Voltaje"];

let Arr1 = add(arr1)
let Arr2 = add(arr2);
let Arr3 = add(arr3);
isEven(Arr1);
isEven(Arr2);
isEven(Arr3);
console.log(add(arr1));
console.log(add(arr2));
console.log(add(arr3));
console.log(isEven(Arr1));
console.log(isEven(Arr2));
console.log(isEven(Arr3));

