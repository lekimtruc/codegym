class Student {

    constructor(id, name, age, email, phone) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._email = email;
        this._phone = phone;
    }

    get getId() {
        return this._id;
    }

    get getName() {
        return this._name;
    }

    get getAge() {
        return this._age;
    }

    get getEmail() {
        return this._email;
    }

    get getPhone() {
        return this._phone;
    }

    set setId(id) {
        this._id = id;
    }

    set setName(name) {
        this._name = name;
    }

    set setAge(age) {
        this._age = age;
    }

    set setEmail(email) {
        this._email = email;
    }

    set setPhone(phone) {
        this._phone = phone;
    }

    study() {
        console.log('Studing...')
    }

    takeExam() {
        console.log('Taking exam...')
    }

    getResult() {
        console.log('Getting result...')
    }
}

//dua 3 sv vào mảng, liet ke sv age < 25
function getStudentAgeUnder25(arr) {
    let studentUnder25 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._age < 25) {
            studentUnder25.push(arr[i])
        }
    }
    if (studentUnder25.length === 0) {
        return 'Không có sv nào dưới 25 tuổi'
    }
    return studentUnder25
}

let studentA = new Student(1, 'Đức', 25, 'duc@gmail.com', '0977876543');
let studentB = new Student(2, 'Tín', 27, 'tin@gmail.com', '0123456789');
let studentC = new Student(3, 'Trúc', 23, 'truc@gmail.com', '0775789654');
let arrStudents = [studentA, studentB, studentC];

console.log(getStudentAgeUnder25(arrStudents));
