import { Shape } from "./Shape";
export class Triangle extends Shape {
    private X1: number;
    private Y1: number;
    private X2: number;
    private Y2: number;
    private X3: number;
    private Y3: number;
    public setX1(X1: number): void {
        this.X1 = X1;
    }
    public setY1(Y1: number): void {
        this.Y1 = Y1;
    }
    public setX2(X2: number): void {
        this.X2 = X2;
    }
    public setY2(Y2: number): void {
        this.Y2 = Y2;
    }
    public setX3(X3: number): void {
        this.X3 = X3;
    }
    public setY3(Y3: number): void {
        this.Y3 = Y3;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.strokeStyle = this.getBorderColor();
        ctx.fillStyle = this.getFillColor();
        ctx.moveTo(this.X1, this.Y1);
        ctx.lineTo(this.X2, this.Y2);
        ctx.lineTo(this.X3, this.Y3);
        ctx.lineTo(this.X1, this.Y1);
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();
    }
    public calculateArea(): number {
        let halfPerimeter: number = this.calculatePerimeter() * 0.5;
        let a: number = halfPerimeter - Math.sqrt(Math.pow((this.X1 - this.X2), 2) + Math.pow((this.Y1 - this.Y2), 2));
        let b: number = halfPerimeter - Math.sqrt(Math.pow((this.X2 - this.X3), 2) + Math.pow((this.Y2 - this.Y3), 2));
        let c: number = halfPerimeter - Math.sqrt(Math.pow((this.X1 - this.X3), 2) + Math.pow((this.Y1 - this.Y2), 2));
        return Math.sqrt(halfPerimeter * (a * b * c));
    }
    public calculatePerimeter(): number {
        let a: number = Math.sqrt(Math.pow((this.X1 - this.X2), 2) + Math.pow((this.Y1 - this.Y2), 2));
        let b: number = Math.sqrt(Math.pow((this.X2 - this.X3), 2) + Math.pow((this.Y2 - this.Y3), 2));
        let c: number = Math.sqrt(Math.pow((this.X1 - this.X3), 2) + Math.pow((this.Y1 - this.Y2), 2));
        return a + b + c;
    }
}
