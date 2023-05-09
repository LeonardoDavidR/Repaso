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
         newName;
    }
    public setTradeMark(newTradeMark : string){
         newTradeMark;
    }
    public setModel(newModel : string){
         newModel; 
    }
    public setColor(newColor : string){
         newColor; 
    }
    public setPrice(newPrice : number){
         newPrice;
    }
    public printAll(){
        console.log( `The characteristics of the mobile are : ${"\n"}name : ${this.name},${"\n"}trademark : ${this.trademark},${"\n"}model : ${this.model},${"\n"}color : ${this.color},${"\n"}price : ${this.price}`)
    }
   
}