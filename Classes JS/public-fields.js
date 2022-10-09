        // Class field declaration
 
        class Rect {
            height = 0; // открытое поле (открытое - можно использовать за пределами класса)
            width = 0;

            getArea() {
                return this.height * this.width; 
            }
        }

        let r = new Rect();
        r.height = 10; // меняем значение открытому полю
        r.width = 20;

        console.log(r.getArea());