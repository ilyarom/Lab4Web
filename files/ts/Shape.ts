import { IShape } from "./IShape";
export abstract class Shape implements IShape {
    protected fillColor: string;
    protected borderColor: string;
    public setFillColor(fillColor: string): void {
        this.fillColor = "#" + fillColor;
    }
    public setBorderColor(borderColor: string): void {
        this.borderColor = "#" + borderColor;
    }
    public getFillColor(): string {
        return this.fillColor;
    }
    public getBorderColor(): string {
        return this.borderColor;
    }
    public abstract draw(ctx: CanvasRenderingContext2D): void;
    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
}
