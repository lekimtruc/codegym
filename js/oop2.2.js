class Apple{
    constructor(weight){
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    decrease(){
        this._weight--
    }
    isEmpty(){
        (this._weight === 0)? true : false
    }
}

class Human{
    constructor(name, gender, weight, apple){
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

    isMale(){
        if(this._gender === 'male'){
            return true
        }else{
            return false
        }
    }

    checkApple(apple){
        if(apple.weight() > 0){
            return true
        }else{
            return false
        }
    }

    eat(apple){
        if(checkApple(apple)){
            apple.decrease()
        }
    }

    say(str){
        console.log(str)
    }
}