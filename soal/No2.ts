const nilaiSahamTertinggi = (saham: number[]) => {
    const nilaiTertinggi = Math.max(...saham);
    return saham.indexOf(nilaiTertinggi);
}

console.log(nilaiSahamTertinggi([7,8,3,10,8]))
console.log(nilaiSahamTertinggi([5,12,11,12,10]))
console.log(nilaiSahamTertinggi([7,18,27,10,29]))
console.log(nilaiSahamTertinggi([20,17,15,14,10]))