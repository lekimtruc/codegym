let value = Number(prompt("Enter a number: "))
let arr = [3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
        alert(`${value} nằm ở vị trí index ${i} của mảng`)
    }
    else {alert('Không tìm thấy phần tử')}
}