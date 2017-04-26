import { Circle } from "./Circle";
import { Square } from "./Rectangle";
import { Shape } from "./Shape";
import { Triangle } from "./Triangle";
window.onload = (): void => {
    let currentShape: string;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    function Clear(): void {
        document.getElementById("arg1").style.visibility = "hidden";
        document.getElementById("arg2").style.visibility = "hidden";
        document.getElementById("arg3").style.visibility = "hidden";
        document.getElementById("arg4").style.visibility = "hidden";
        document.getElementById("arg5").style.visibility = "hidden";
        document.getElementById("arg6").style.visibility = "hidden";
        document.getElementById("arg1_label").style.visibility = "hidden";
        document.getElementById("arg2_label").style.visibility = "hidden";
        document.getElementById("arg3_label").style.visibility = "hidden";
        document.getElementById("arg4_label").style.visibility = "hidden";
        document.getElementById("arg5_label").style.visibility = "hidden";
        document.getElementById("arg6_label").style.visibility = "hidden";
        document.getElementById("button").style.visibility = "hidden";
        document.getElementById("arg3_label").innerHTML = "X2";
        ctx.clearRect(0, 0, 700, 500);
    }

    function OpenCircleMenu(): void {
        Clear();
        document.getElementById("arg1").style.visibility = "visible";
        document.getElementById("arg2").style.visibility = "visible";
        document.getElementById("arg3").style.visibility = "visible";
        document.getElementById("arg1_label").style.visibility = "visible";
        document.getElementById("arg2_label").style.visibility = "visible";
        document.getElementById("arg3_label").style.visibility = "visible";
        document.getElementById("button").style.visibility = "visible";
        document.getElementById("arg3_label").innerHTML = "Radius";
        document.getElementById("arg7_label").style.visibility = "visible";
        document.getElementById("arg8_label").style.visibility = "visible";
        document.getElementById("arg7").style.visibility = "visible";
        document.getElementById("arg8").style.visibility = "visible";
        currentShape = "circle";
    }

    function OpenSquareMenu(): void {
        Clear();
        document.getElementById("arg1").style.visibility = "visible";
        document.getElementById("arg2").style.visibility = "visible";
        document.getElementById("arg3").style.visibility = "visible";
        document.getElementById("arg4").style.visibility = "visible";
        document.getElementById("arg1_label").style.visibility = "visible";
        document.getElementById("arg2_label").style.visibility = "visible";
        document.getElementById("arg3_label").style.visibility = "visible";
        document.getElementById("arg4_label").style.visibility = "visible";
        document.getElementById("button").style.visibility = "visible";
        document.getElementById("arg7_label").style.visibility = "visible";
        document.getElementById("arg8_label").style.visibility = "visible";
        document.getElementById("arg7").style.visibility = "visible";
        document.getElementById("arg8").style.visibility = "visible";
        currentShape = "square";
    }

    function OpenTriangleMenu(): void {
        Clear();
        document.getElementById("arg1").style.visibility = "visible";
        document.getElementById("arg2").style.visibility = "visible";
        document.getElementById("arg3").style.visibility = "visible";
        document.getElementById("arg4").style.visibility = "visible";
        document.getElementById("arg5").style.visibility = "visible";
        document.getElementById("arg6").style.visibility = "visible";
        document.getElementById("arg7").style.visibility = "visible";
        document.getElementById("arg8").style.visibility = "visible";
        document.getElementById("arg1_label").style.visibility = "visible";
        document.getElementById("arg2_label").style.visibility = "visible";
        document.getElementById("arg3_label").style.visibility = "visible";
        document.getElementById("arg4_label").style.visibility = "visible";
        document.getElementById("arg5_label").style.visibility = "visible";
        document.getElementById("arg6_label").style.visibility = "visible";
        document.getElementById("arg7_label").style.visibility = "visible";
        document.getElementById("arg8_label").style.visibility = "visible";
        document.getElementById("button").style.visibility = "visible";
        currentShape = "triangle";
    }

    function DrawInfo(shape: Shape): void {
        ctx.font = "25px Arial";
        ctx.fillText("Area: " + shape.calculateArea(), 500, 300);
        ctx.fillText("Perimeter: " + shape.calculatePerimeter(), 500, 400);
    }
    function InitTriangle(shape: Triangle) {
        shape.setX1(parseInt((<HTMLInputElement> document.getElementById("arg1")).value, 10));
        shape.setY1(parseInt((<HTMLInputElement> document.getElementById("arg2")).value, 10));
        shape.setX2(parseInt((<HTMLInputElement> document.getElementById("arg3")).value, 10));
        shape.setY2(parseInt((<HTMLInputElement> document.getElementById("arg4")).value, 10));
        shape.setX3(parseInt((<HTMLInputElement> document.getElementById("arg5")).value, 10));
        shape.setY3(parseInt((<HTMLInputElement> document.getElementById("arg6")).value, 10));
    }
    function InitSquare(shape: Square) {
        shape.setX1(parseInt((<HTMLInputElement> document.getElementById("arg1")).value, 10));
        shape.setY1(parseInt((<HTMLInputElement> document.getElementById("arg2")).value, 10));
        shape.setX2(parseInt((<HTMLInputElement> document.getElementById("arg3")).value, 10));
        shape.setY2(parseInt((<HTMLInputElement> document.getElementById("arg4")).value, 10));
    }
    function InitCircle(shape: Circle) {
        shape.setX(parseInt((<HTMLInputElement> document.getElementById("arg1")).value, 10));
        shape.setY(parseInt((<HTMLInputElement> document.getElementById("arg2")).value, 10));
        shape.setRadius(parseInt((<HTMLInputElement> document.getElementById("arg3")).value, 10));
    }
    function DrawShape(): void {
        Clear();
        let shape: Shape;
        if (currentShape === "circle") {
            shape = new Circle();
            InitCircle(<Circle> shape);
            shape.setFillColor((<HTMLInputElement> document.getElementById("arg7")).value);
            shape.setBorderColor((<HTMLInputElement> document.getElementById("arg8")).value);
            (<Circle> shape).draw(ctx);
            DrawInfo(shape);
        }
        if (currentShape === "square") {
            shape = new Square();
            InitSquare(<Square> shape);
            shape.setFillColor((<HTMLInputElement> (document.getElementById("arg7"))).value);
            shape.setBorderColor((<HTMLInputElement> (document.getElementById("arg8"))).value);
            (<Square> shape).draw(ctx);
            DrawInfo(shape);
        }
        if (currentShape === "triangle") {
            shape = new Triangle();
            InitTriangle(<Triangle> shape);
            shape.setFillColor((<HTMLInputElement> (document.getElementById("arg7"))).value);
            shape.setBorderColor((<HTMLInputElement> (document.getElementById("arg8"))).value);
            (<Triangle> shape).draw(ctx);
            DrawInfo(shape);
        }
    }

    let circle: HTMLInputElement = <HTMLInputElement> document.getElementById("circle");
    circle.onclick = (): void => OpenCircleMenu();
    let square: HTMLInputElement = <HTMLInputElement> document.getElementById("square");
    square.onclick = (): void => OpenSquareMenu();
    let triangle: HTMLInputElement = <HTMLInputElement> document.getElementById("triangle");
    triangle.onclick = (): void => OpenTriangleMenu();
    let button: HTMLInputElement = <HTMLInputElement> document.getElementById("button");
    button.onclick = (): void => DrawShape();
};
