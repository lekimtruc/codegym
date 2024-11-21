const fixedText = 'U LÀ CHỜI!!!'
let currentIndex = 0

function keydown() {
    if (currentIndex < fixedText.length) {
        // document.getElementById('textarea').addEventListener('input', () => {
        this.value = ''
        document.getElementById('textarea').innerHTML += fixedText[currentIndex];
        console.log(fixedText[currentIndex])
        // })
        currentIndex++
    } else {
        document.getElementById('textarea').innerHTML = ''
        currentIndex = 0
    }
    //
}