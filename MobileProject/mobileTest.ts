import { Mobile } from "./mobile";

let newMobile : Mobile= new Mobile("Samsung Galaxy" , "Samsung" , "Galaxy 10" , "black", 700);
let newMobile1 : Mobile = new Mobile("Iphone x24", "Iphone", "24.b" , "Cyan" , 900) ;
let newMobile2 : Mobile = new Mobile("Xiaomi mi 9 Tpro", "Xiaomi", "mi9 Tpro", "Black", 450);
let newMobile3 : Mobile = new Mobile("Nokia 3111", "Nokia", "3111-t" , "Gray", 60);
let myMobiles : Array<any> = [newMobile1, newMobile2, newMobile3];





// console.log(newMobile.getColor());
// console.log(newMobile.getModel());
// console.log(newMobile.getName());
// console.log(newMobile.getPrice());
// console.log(newMobile.getTradeMark());
// console.log(newMobile.setColor("Green"));
// console.log(newMobile.setModel("Lg 18293"));
// console.log(newMobile.setName("Ganchito"));
// console.log(newMobile.setPrice(2000));
// console.log(newMobile.setTradeMark("Lg"));
// console.log(newMobile.printAll());
console.log(myMobiles[0].printAll(),"\n",myMobiles[1].printAll(),"\n",myMobiles[2].printAll())