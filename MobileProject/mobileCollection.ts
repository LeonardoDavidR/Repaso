import { Mobile } from "./mobile"

export class MobileCollection{
    private mobiles : Mobile [];
    private totalPrice : number; 
    
    constructor(mobiles : Mobile []){
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
    public getMobiles() : Mobile[]{
        return this.mobiles;
    }
    public getTotalPrice(): number{
        return this.totalPrice;
        
    }
    public setMobiles(newMobArr : Mobile[]):void{
         this.mobiles = newMobArr;
    }
    public setTotalPrice(newTotalPrice : number):void {
        this.totalPrice = newTotalPrice
    }
    private totalPriceCalculation() : number{
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