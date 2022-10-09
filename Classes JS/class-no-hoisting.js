// в отличие от функций, классы не поддерживают hoisting
// Использовать класс можно только после его определения
// в данном случае будет ошибка "ReferenceError: Cannot access 'Rect' before initialization"
       
class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2;
    }
}
let r1 = new Rect(10, 20);

console.log("r1 area " + r1.getArea());
console.log("r1 perimeter " + r1.getPerimeter());