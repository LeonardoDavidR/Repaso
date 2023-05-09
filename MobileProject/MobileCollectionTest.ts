import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let newMob : Mobile = new Mobile("Z pro" , "Samsung" , "Z", "White", 732)
let newMob1 : Mobile = new Mobile("Iphone 12 Max", "Apple", "12 Max", "Pink", 999);
let newMob2 : Mobile = new Mobile("Redmi note 12", "Xiaomi", "Redmi note", "Yellow", 240);
let newMob3 : Mobile = new Mobile("Razer Gaming Phone", "Razer" , "Gaming phone", "Green", 1200);
let newMobiles1 : Array<Mobile>= [newMob, newMob1,newMob2, newMob3]
let newMobiles2 : Array<Mobile> = [newMob1, newMob2]
let newMobiles : MobileCollection = new MobileCollection(newMobiles1)

// console.log(newMobiles.getMobiles());
console.log(newMobiles.getTotalPrice());
// console.log(newMobiles.setMobiles(newMobiles2))
console.log(newMobiles.setTotalPrice(newMobiles2))
console.log(newMobiles.printMyCollection());