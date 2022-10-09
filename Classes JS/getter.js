class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // getter - синтаксис, связывающий свойство объекта с методом
    // при обращении obj.width будет вызвана функция get width()
    get width() {
        console.log("get width()");
        return this._width;
    }

    get height() {
        console.log("get height()");
        return this._height;
    }

    get area() {
        console.log("get area()");
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20);

console.log("width " + r1.width); // при обращении к свойству width происходит вызов getter с 21 строки
console.log("height " + r1.height);
console.log("area " + r1.area);