import { Shape } from "./Shape";
export class Square extends Shape {
    private X1: number;
    private Y1: number;
    private X2: number;
    private Y2: number;
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
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.getFillColor();
        ctx.fillRect(this.X1, this.Y1, this.X2 - this.X1, this.Y2 - this.Y1);
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.getBorderColor();
        ctx.strokeRect(this.X1, this.Y1, this.X2 - this.X1, this.Y2 - this.Y1);
    }
    public calculateArea(): number {
        return Math.round((this.X2 - this.X1) * (this.Y2 - this.Y1));
    }
    public calculatePerimeter(): number {
        return Math.round((2 * (this.X2 - this.X1)) + (2 * (this.Y2 - this.Y1)));
    }
}
