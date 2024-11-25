class Rectangle {

    constructor(chieuDai, chieuRong) {
        this._chieuDai = chieuDai;
        this._chieuRong = chieuRong;
    }

    get chieuDai() {
        return this._chieuDai;
    }

    set chieuDai(value) {
        this._chieuDai = value;
    }

    get chieuRong() {
        return this._chieuRong;
    }

    set chieuRong(value) {
        this._chieuRong = value;
    }

    tinhDienTich() {
        return `Diện tich: ${this._chieuDai * this._chieuRong}`
    }

    tinhChuVi() {
        return `Chu vi: ${(this._chieuDai + this._chieuRong) * 2}`
    }

    createRectangle(chieuDai, chieuRong) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        ctx.fillRect(100, 100, chieuDai, chieuRong);
    }
}

let chieuDai = Number(prompt('Nhập chiều dài hình chữ nhật (px): '))
let chieuRong = Number(prompt('Nhập chiều rộng hình chữ nhật (px): '))
rectangle = new Rectangle(chieuDai, chieuRong)
rectangle.createRectangle(chieuDai, chieuRong)

let dienTich = rectangle.tinhDienTich()
document.getElementById('dienTich').innerHTML = dienTich
let chuVi = rectangle.tinhChuVi()
document.getElementById('chuVi').innerHTML = chuVi