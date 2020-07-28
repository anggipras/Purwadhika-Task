//tugas ubah Decimal ke Hexadecimal
var dectoHex = (dec) => {
    var obj = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    }
    var output = []
    var output2

    do {
        output2 = dec % 16
        output.unshift(obj[output2] || output2)
        dec = Math.floor(dec / 16)
    } while (dec)
    return output.join('')
}

console.log(dectoHex(50))

//tugas ubah Decimal ke Binary number
var dectoBin = (dec) => {
    var output = []
    var output2

    do {
        output2 = dec % 2
        output.push(output2)
        dec = Math.floor(dec / 2)
    } while (dec)
    return output.join('')
}

console.log(dectoBin(50))