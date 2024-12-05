function sockMerchant(n, ar) {
    let count = 0
    // let j=n-1
    for(let i=0; i<n; i++){
        // while(j>i){
        for(let j=n-1; j>i; j--){
            if(ar[i] === ar[j]){
                count++
                ar.splice(j,1)
                break
            }
            // j--
        }
    }
    return count
}
let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
sockMerchant(10, ar)