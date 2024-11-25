class Battery {
    constructor(energy) {
        this._energy = energy;
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }

    decreaseEnergy() {
        if (this._energy > 0) {
            this._energy--
        }
    }
}

class FlashLamp {
    constructor(status, battery) {
        this._status = status;
        this._battery = battery;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    light() {
        if (this._status) {
            console.log('Lighting')
        } else {
            console.log('Not lighting')
        }
    }

    turnOn() {
        this._status = true
    }

    turnOff() {
        this._status = false
    }
}
let battery1 = new Battery(10);
let status1 = (battery1 > 0)? true: false;

let flashLamp = new FlashLamp(status1, battery1);

document.write("Battery info:" + flashLamp.battery.energy+ "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.battery.energy+ "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();