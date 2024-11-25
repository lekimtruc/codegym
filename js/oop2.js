class Circle {

    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    Circle(){

    }
    getArea(){
        let S = Math.PI * this._radius * this._radius
        return S
    }
}
let c = new Circle(2, 'red');
let r = c.radius; // 2

let area = c.getArea(); // 12.566370614359172
alert("radius: "  +r+ "; area: " + area);