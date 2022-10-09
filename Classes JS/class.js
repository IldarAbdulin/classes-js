// Определение класса (class declaration)
class Rect {
    // конструктор - инициализирует экземпляр класса Rect, представляет обычную функцию- конструктор
    constructor(width, height) {
            this.width = width;// свойство width
            this.height = height;
        }

        // метод, будет добавлен в прототип Rect.prototype
        // Rect.prototype.getArea() {}
        getArea() {
            return this.height * this.width;
        }

        getPerimeter() {
            return this.height * 2 + this.width * 2;
        }
}

let r1 = new Rect(10, 20);
let r2 = new Rect(15, 9);

console.log(r1.width);
console.log("r1 area " + r1.getArea());
console.log("r1 perimeter " + r1.getPerimeter());

console.log("r2 area " + r2.getArea());
console.log("r2 perimeter " + r2.getPerimeter());