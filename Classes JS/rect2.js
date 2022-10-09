class Rect {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        if (this.#width === undefined) {
            this.#width = 0;
        }

        return this.#width;
    }

    set width(value) {
        if (value < 0) {
            alert("Значение для width не может быть меньше 0");
        } else {
            this.#width = value;
        }
    }

    get height() {
        if (this.#height === undefined) {
            this.#height = 0;
        }

        return this.#height;
    }

    set height(value) {
        if (value < 0) {
            alert("Значение для height не может быть меньше 0");
        } else {
            this.#height = value;
        }
    }

    get area() {
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20); 

//r1.#height; // поменять поле, в котором хранится значение, напрямую нельзя. Можно использовать свойства, которые проверяют корректность присваиваемого значения
r1.height = -10; // ошибка, значение не изменяется
r1.width = 30; 

console.log("width " + r1.width);
console.log("height " + r1.height);
console.log("area " + r1.area);