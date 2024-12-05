class ElectricLamp {

    constructor(status) {
        this._status = status;
    }

    turnOff() {
        this._status = false
        return document.getElementById('lamp').innerHTML = 'Đèn đã tắt'
    }

    turnOn() {
        this._status = true
        return document.getElementById('lamp').innerHTML = 'Đèn đã bật'
    }
}

class SwitchButton {

    constructor(status, lamp) {
        this._status = status;
        this._lamp = lamp;
    }

    connectToLamp() {
        if (this.switchOn()) {
            this._lamp.turnOn()
        } else if (this.switchOff()) {
            this._lamp.turnOff()
        }
    }

    changeLamp(){
        if(!this._status){
            this._status = true
        }else{
            this._status = false
        }
        return this.connectToLamp()
    }

    setButtonStatus() {
        if (this._status) {
            document.getElementById('switch').label = 'Off'
        } else {
            document.getElementById('switch').label = 'On'
        }
    }

    switchOff() {
        if (!this._status) {
            return true
        } else {
            return false
        }
    }

    switchOn() {
        if (this._status) {
            return true
        } else {
            return false
        }
    }
}

let lamp = new ElectricLamp(false)
let switchbutton = new SwitchButton(false, lamp)
console.log(switchbutton.connectToLamp())