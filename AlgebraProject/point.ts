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
    public distanceToOrigin():number{
        let x1 = this.x;
        let y1 = this.y
        let cuadrado1 = Math.pow(x1, 2);
        let cuadrado2 = Math.pow(y1,2);
        return Math.sqrt((cuadrado1-0) + (cuadrado2-0))
    }
    calculateDistance(anotherPoint:Point): number {
        let x = this.x;
        let y = this.y;
        let x1 = anotherPoint.x;
        let y1 = anotherPoint.y;
        let restaX = x-x1;
        let restaY = y-y1;
        let cuadrado1 = Math.pow(restaX,2);
        let cuadrado2 = Math.pow(restaY,2)
        // let cuadradox = Math.pow(x, 2);
        // let cuadradoy = Math.pow(y,2);
        // let cuadradox1 = Math.pow(x1,2);
        // let cuadradoy1 = Math.pow(y1,2);
        
        return Math.sqrt(cuadrado1+cuadrado2)
    }
}


let point = new Point(7,7);
let point2 = new Point(4,4);

console.log(point.calculateDistance(point2))