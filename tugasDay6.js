var words = 'halo duniaz'
var result = []
for(let i=0; i<=words.length-1; i++) {
    var a = words.charCodeAt(i)
    // console.log(a)
    if (a==32) {
        a = a
        a = String.fromCharCode(a)
        result.push(a)
    } else if(a==122) {
        a = String.fromCharCode(97)
        result.push(a)
    } else {
        a+=1
        a = String.fromCharCode(a)
        result.push(a)
    }
}
result = result.join('')
console.log(result)

//toUpperCase Function
function toUpperCaseWords(word) {
    var result = ''
    for(let i=0; i<word.length; i++) {
        var codes = word[i].charCodeAt(0)
        if (codes>=97 && codes<=122) {
            codes -= 32
        } 
        result += String.fromCharCode(codes)
    } 
    return result
  }
console.log(toUpperCaseWords('HaLo DuNiA'))

//toLowerCase Function
function toLowerCaseWords(word) {
    var result = ''
    for(let i=0; i<word.length; i++){
        var codes = word[i].charCodeAt(0)
        if(codes>=65 && codes<=90) {
            codes += 32
        }
        result += String.fromCharCode(codes)
    } 
    return result
}
console.log(toLowerCaseWords('HaLo DuNiA'))