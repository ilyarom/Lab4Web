export interface IShape {
    setFillColor(fillColor: string): void;
    getFillColor(): string;

    setBorderColor(outlineColor: string): void;
    getBorderColor(): string;

    calculateArea(): number;
    calculatePerimeter(): number;

    draw(ctx: CanvasRenderingContext2D): void;
}
