export class Point {
    private x : number
    private y : number 

    constructor(x: number, y : number ){
        this.x = x
        this.y = y
    }

    public getX(){
        return this.x
    }
    public getY(){
        return this.y
    }
    public setX(newX : number){
        return this.x = newX;
    }
    public setY(newY : number){
        return this.y = newY
    }
    public toString(){
        return this.x+this.y;
    }
    
}