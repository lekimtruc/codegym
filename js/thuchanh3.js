class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTenKhachHangn, CMND, ngayMoSo, soTienGui) {
        this._maSo = maSo;
        this._loaiTietKiem = loaiTietKiem;
        this._hoTenKhachHangn = hoTenKhachHangn;
        this._CMND = CMND;
        this._ngayMoSo = ngayMoSo;
        this._soTienGui = soTienGui;
    }

    get maSo() {
        return this._maSo;
    }

    set maSo(value) {
        this._maSo = value;
    }

    get loaiTietKiem() {
        return this._loaiTietKiem;
    }

    set loaiTietKiem(value) {
        this._loaiTietKiem = value;
    }

    get hoTenKhachHangn() {
        return this._hoTenKhachHangn;
    }

    set hoTenKhachHangn(value) {
        this._hoTenKhachHangn = value;
    }

    get CMND() {
        return this._CMND;
    }

    set CMND(value) {
        this._CMND = value;
    }

    get ngayMoSo() {
        return this._ngayMoSo;
    }

    set ngayMoSo(value) {
        this._ngayMoSo = value;
    }

    get soTienGui() {
        return this._soTienGui;
    }

    set soTienGui(value) {
        this._soTienGui = value;
    }
}

let danhSachStk = []
let soTietKiem1 = new SoTietKiem('stk01', 'loai1', 'Nguyen Van A', '123456789', '5/12/2024', 5000000)
let soTietKiem2 = new SoTietKiem('stk02', 'loai2', 'Tran Thi B', '987654321', '5/12/2024', 2000000)
let soTietKiem3 = new SoTietKiem('stk03', 'loai1', 'Phan Van C', '345216987', '5/12/2024', 28000000)
danhSachStk.push(soTietKiem1)
danhSachStk.push(soTietKiem2)
danhSachStk.push(soTietKiem3)
for (let i = 0; i < danhSachStk.length; i++) {
    document.getElementById('danhSach').innerText = danhSachStk[i]
}
