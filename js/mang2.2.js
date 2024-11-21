let dictionary = {
    "apple": "táo",
    "banana": "chuối"
}
let keys = Object.keys(dictionary);

function search() {
    let c = document.getElementById('english').value
    for (let i = 0; i < keys.length; i++) {
        if (c === keys[i]) {
            document.getElementById('result').innerHTML = dictionary[c]
        }
    }
}