let arr = [-3, 5, 1, 3, 2, 10]
let first = 0, last = arr.length-1, temp
while (first < last){
    temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp
    first++
    last--
}
console.log(arr)