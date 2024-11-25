class Temperature{

    constructor(doC) {
        this._doC = doC;
    }


    get doC() {
        return this._doC;
    }

    set doC(value) {
        this._doC = value;
    }

    doCSangF(){
        return `${this._doC} độ C = ${(9*this._doC/5 + 32)} độ F`
    }

    doCSangK(){
        return `${this._doC} độ C = ${this._doC + 273.15} độ Kelvin`
    }
}
let doC = new Temperature(25)
document.getElementById('doF').innerHTML = doC.doCSangF()
document.getElementById('doK').innerHTML = doC.doCSangK()