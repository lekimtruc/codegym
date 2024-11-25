// Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)
// Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
//     Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
//     Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
class Mobile{

    constructor(pin, dangBat) {
        this._pin = pin;
        this._dangBat = dangBat;
        this._tnDangSoan = [];
        this._tnDaNhan = [];
        this._tnDaGui = [];
    }

    get pin() {
        return this._pin;
    }

    set pin(value) {
        this._pin = value;
    }

    get dangBat() {
        return this._dangBat;
    }

    set dangBat(value) {
        this._dangBat = value;
    }

    get tnDangSoan() {
        return this._tnDangSoan;
    }

    set tnDangSoan(value) {
        this._tnDangSoan = value;
    }

    get tnDaNhan() {
        return this._tnDaNhan;
    }

    set tnDaNhan(value) {
        this._tnDaNhan = value;
    }

    get tnDaGui() {
        return this._tnDaGui;
    }

    set tnDaGui(value) {
        this._tnDaGui = value;
    }

//     Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
    kiemTraDienThoaiBat(){
        (this._dangBat === true)? true: false;
    }

//     Có chức năng bật và tắt điện thoại.
    batTatDienThoai(){
        if(this._dangBat === true){
            this._dangBat = false;
        }else{
            this._dangBat = true;
        }
    }

//     Có chức năng xạc pin điện thoại.
    sacDienThoai(){
        while (this._pin < 100){
            setTimeout(pin(this._pin++), 60000)
        }
    }

//     Có chức năng soạn tin nhắn.
    soanTinNhan(tnDangSoan){
        return tnDangSoan(tnDangSoan)
    }

//     Có chức năng nhận tin nhắn từ một chiếc mobile khác.
//     Có chức năng gửi tin nhắn tới một chiếc mobile khác.
    //mobile 1 gửi, mobile 2 nhận
    guiTinNhan(mobile1, mobile2, tn){
        mobile1._tnDaGui.push(tn)
        return mobile1.xemTinDaGui()
    }

    nhanTinNhan(mobile1, mobil2, tn){
        mobile2._tnDaNhan.push(tn)
        document.getElementById('nhanTinNhan').innerHTML = mobile2.xemTinNhan()
    }

//     Có chức năng xem tin trong hộp thư đến.
    xemTinNhan(){
        return this._tnDaNhan
    }

//     Có chức năng xem tin đã gửi.
    xemTinDaGui(){
        return this._tnDaGui
    }
}
//     Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
//     Các chức năng không thể hoạt động nếu điện thoại chưa bật.

let tn = document.getElementById('guiTinNhan').value
console.log(tn)
let nokia = new Mobile(100, true);
let iphone = new Mobile(50, true);
console.log(nokia.guiTinNhan(nokia, iphone, tn))
console.log(iphone.nhanTinNhan(nokia, iphone, tn))
