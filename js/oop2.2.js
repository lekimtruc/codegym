class Apple {
    constructor(weight) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    decrease() {
        this._weight--
    }

    isEmpty() {
        if (this._weight === 0) {
            return true
        } else {
            return false
        }
    }
}

class Human {
    constructor(name, gender, weight, apple) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
        this._apple = apple;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get apple() {
        return this._apple;
    }

    set apple(value) {
        this._apple = value;
    }

    isMale() {
        if (this._gender === 'male') {
            return true
        } else {
            return false
        }
    }

    checkApple(apple) {
        if (apple.weight > 0) {
            return true
        } else {
            return false
        }
    }

    eat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease()
            this._weight++
        } else {
            return 'Không thể ăn, táo ko còn miếng nào'
        }
        return `Táo còn ${apple.weight} dv, ${this._name} nặng ${this._weight} dv`;
    }

    say(str) {
        return str
    }
}

let apple = new Apple(10)
let adam = new Human('adam', 'male', 60, apple)
let eva = new Human('eva', 'female', 50, apple)
console.log(adam.say('hello'))
console.log(eva.eat(apple))
console.log(adam.isMale())
console.log(apple.isEmpty())