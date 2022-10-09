        // Class field declaration
        class User {
            #name = ""; // закрытое поле (закрытое - можно использовать только в классе)

            constructor(name) {
                this.#name = name; // закрытое поле можно поменять в теле класса
            }

            getName() {
                return this.#name; // значение закрытого поля можно прочесть в поле класса
            }
        }

        let u = new User("Dmitriy");
        u.#name = "TEST"; // закрытое поле нельзя изменить за пределами класса
        console.log(u.getName());