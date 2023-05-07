export class Mobile{
    private name :string 
    private trademark :string 
    private model :string
    private color : string
    private price : number 
   

    constructor(name : string, trademark :string , model : string , color : string , price : number ){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
        
    }

    public getName(){
        return this.name
    }
    public getTradeMark(){
        return this.trademark
    }
    public getModel(){
        return this.model
    }
    public getColor(){
        return this.color
    }
    public getPrice(){
        return this.price
    }
    public setName(newName : string){
        return newName;
    }
    public setTradeMark(newTradeMark : string){
        return newTradeMark;
    }
    public setModel(newModel : string){
        return newModel; 
    }
    public setColor(newColor : string){
        return newColor; 
    }
    public setPrice(newPrice : number){
        return newPrice;
    }
    public printAll(){
        return `The characteristics of the mobile are : ${"\n"}name : ${this.name},${"\n"}trademark : ${this.trademark},${"\n"}model : ${this.model},${"\n"}color : ${this.color},${"\n"}price : ${this.price}`
    }
    // public myArrPrintAll(newArrMob : Array<any>) : Mobile[]{
    //     let i : number = 0
    //     let myArrMob : Array<any>= [];
    //     for(i = 0 ; i< newArrMob.length; i++){
            
    //         myArrMob.push(newArrMob[i].printAll())
    //     }
    //     return myArrMob; 
    // }
}