import { Mobile } from "./mobile"

export class MobileCollection{
    private mobiles : Mobile [];
    private totalPrice : number; 
    
    constructor(mobiles : Mobile []){
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
    public getMobiles(){
        return this.mobiles;
    }
    public getTotalPrice(){
        return this.totalPrice;
        
    }
    public setMobiles(newMobArr : Array<Mobile>){
        return this.mobiles = newMobArr;
    }
    public setTotalPrice(newTotalPrice : Array<Mobile>) {
        return ;
    }
    private totalPriceCalculation(){
        let i : number = 0;
        let totalPr : number  = 0;
        for(i = 0 ; i < this.mobiles.length; i++){
            totalPr += this.mobiles[i].getPrice()
        } 
        return totalPr;
    }
    public printMyCollection(){
        let i : number = 0
        let x : string = ""
        let y : string = "This is all my Mobiles"
        let z : Array <any> = ["Price overall" + this.totalPrice]
        for(i = 0; i < this.mobiles.length; i++){
            x = x + ": \n" + this.mobiles[i].printAll() + "\n"
        }
        return y+x+z
        
    }
}