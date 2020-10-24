// Задание 1

function parseCount(num) {
    let parseNum = Number.parseInt(num);
    if (isNaN(parseNum)) {
        throw new Error('Невалидное значение');
    } else {
        return parseNum;
    }
}

function validateCount(num) {
    let parseNum;
    try {
        parseNum = parseCount(num);
        return parseNum;
    } catch (e) {
        return e;
    }

}

// Задание 2

class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }

    }
    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return Number.parseFloat(perimeter);
    }
    getArea() {
        let p = this.getPerimeter() / 2
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number.parseFloat(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    debugger;
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch {
        let triangleError = {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
        return triangleError;
    }
}