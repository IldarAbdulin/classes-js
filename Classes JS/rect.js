class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        if (this._width === undefined) {
            this._width = 0;
        }

        return this._width;
    }

    set width(value) {
        if (value < 0) {
            alert("Значение для width не может быть меньше 0");
        } else {
            this._width = value;
        }
    }

    get height() {
        if (this._height === undefined) {
            this._height = 0;
        }

        return this._height;
    }

    set height(value) {
        if (value < 0) {
            alert("Значение для height не может быть меньше 0");
        } else {
            this._height = value;
        }
    }

    get area() {
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20);
let r2 = new Rect(30) 

// r1._height = -10; // ошибка, значение не изменяется
// r1.width = 30; 
r2.width= 20;



// console.log("width " + r1.width);
// console.log("height " + r1.height);
// console.log("area " + r1.area);
console.log(r2.area)