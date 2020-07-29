// Imitasi function repeat
var word = 'halo'
console.log('repeat asli', word.repeat(5))

const repeatedWord = (char, num) => {
    var result = []
    for(let j=0; j<=num; j++){
        result.push(char)
    }
    return result.join('')
}

console.log('repeat imitasi', repeatedWord(word,5))


//Imitasi function filter
var newar = [1,2,3,4,5]

var filterarr = newar.filter((val,index) => val%2===0)
console.log('filter asli', filterarr)


var genapNum = (num) => num %2 == 0

var ganjilNum = (num) => num %2 !== 0

const filteredNum = (num, cond) => {
    var ganjilGenap = []
    for(var i=0; i<num.length; i++) {
        if (cond(num[i])) {
            ganjilGenap.push(num[i])
        }
    }
    return ganjilGenap
}

console.log('filter imitasi', filteredNum(newar, genapNum))