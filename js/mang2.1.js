//bai 1
let myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.join())

//bai 2
//0-254-6-8
let str = '025468'
let arr = [str[0]]
for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0){
       arr.push('-', str[i]);
    }else {
        arr.push(str[i])
    }
}
console.log(arr.join(''))

//bai 3
//The Quick Brown Fox -> tHE qUICK bROWN fOX
let str1 = 'The Quick Brown Fox'
let arr1 = []
for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i].toUpperCase()) {
        arr1.push(str1[i].toLowerCase());
    }else{
        arr1.push(str1[i].toUpperCase());
    }
}
console.log(arr1.join(''))
