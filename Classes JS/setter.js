class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    // setter - синтаксис, связывающий свойство объекта с функцией
    // setter вызывается во время присвоения значения свойству
    // присваиваемое значение попадает в качестве значения параметра setter
    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get area() {
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20); // изначальные значения высоты и ширины 10 и 20 

r1.height = 30; // через свойства height меняем высоту 
r1.width = 30; // через свойства width меняем высоту

console.log("width " + r1.width); 
console.log("height " + r1.height);
console.log("area " + r1.area);