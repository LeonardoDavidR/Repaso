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
    calculateQuadrant():number{
        let cuadrantes  = 0
        let cuadrante0 = 0;
        let cuadrante1= 1;
        let cuadrante2 = 2;
        let cuadrante3 = 3;
        let cuadrante4 = 4
        if(this.x == 0 && this.y == 0){
            cuadrantes = cuadrante0
            
        }
        if(this.x > 0 && this.y < 0){
            cuadrantes = cuadrante1
            
        }
        if(this.x <0 && this.y > 0){
            cuadrantes = cuadrante1
            
        }
        if(this.x < 0 && this.y < 0){
            cuadrantes = cuadrante3
            
        }
        if(this.x > 0 && this.y < 0){
            cuadrantes = cuadrante4
            
        }
        return cuadrantes;
    }
    calculateNearest(points : Point[]): Point{
        let cercano : number = 100
        for(let i = 0 ; i < points.length; i++){
            
            this.calculateDistance(points[i])
        if(this.calculateDistance(points[i]) < cercano){
                cercano = i
        }
    }
    return points[cercano]
    }
}




let point = new Point(4,-2);
let point2 = new Point(4,4);
let point3 = new Point(5,7);
let point4 = new Point(4,8);
let point5 = new Point(12,4);
let points : Point []= [point3, point4,point5]

console.log(point.calculateQuadrant())
console.log(point.calculateDistance(point3))
console.log(point.calculateDistance(point4));
console.log(point.calculateDistance(point5))
console.log(point.calculateDistance(point2))
console.log(point.calculateNearest(points))