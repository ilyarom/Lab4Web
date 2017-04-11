import { Shape } from "./Shape";
export class Circle extends Shape {
    private X: number;
    private Y: number;
    private radius: number;
    public setX(X: number): void {
        this.X = X;
    }
    public setY(Y: number): void {
        this.Y = Y;
    }
    public setRadius(radius: number): void {
        this.radius = radius;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.X, this.Y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.getFillColor();
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.getBorderColor();
        ctx.stroke();
    }
    public calculateArea(): number {
         return Math.round(Math.PI * this.radius * this.radius);
    }
    public calculatePerimeter(): number {
        return Math.round(2 * Math.PI * this.radius);
    }
}
