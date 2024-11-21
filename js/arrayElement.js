let n = 0
let arr = []
function addNumber() {
    arr[n] = document.getElementById('number').value
    alert(`Element: ${arr[n]} Added at index ${n}`)
    n++
    document.getElementById('number').value = ''
}

function displayArray() {
    let e = '<hr/>'
    for (let i = 0; i < arr.length; i++) {
        e += 'Element ' +i +' = ' +arr[i] +'<br/>'
    }
    document.getElementById('result').innerHTML = e
}