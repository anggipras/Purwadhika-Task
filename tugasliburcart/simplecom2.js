class Item {
    constructor(_nama, _harga, _img) {
        this.nama = _nama
        this.harga = _harga
        this.img = _img
    }
}

class Cart {
    constructor(_nama, _harga, _img, _amo) {
        this.nama = _nama
        this.harga = _harga
        this.img = _img
    }
}
//==============================================
var stok = [
    new Item('Ultra Milk', 10000, './susu.jpg'),
    new Item('Chitato', 15000, './chitato.jpg'),
    new Item('Tae Ko Nai', 5000, './seaweed.jpg')
]

var cartList = []
//==============================================
var cartHarga = []
var totalAmo = 0
var totaltotal = 0

const displayStok = () => {
    var displaySt = ''
    stok.forEach((val, ind) => {
        displaySt += `<tr>
                        <td>${val.nama}</td>
                        <td>${val.harga}</td>
                        <td>
                            <img src="${val.img}" alt="" width="150" height="150">
                        </td>
                        <td>
                            <input type="submit" value="Add to cart" onclick="addToCart(${ind})">
                        </td>
                    </tr>` 
    })
    document.getElementById('item').innerHTML = displaySt
}

displayStok()

const addToCart = (ind) => {
    let valName = stok[ind].nama
    let valPrice = stok[ind].harga
    cartHarga.push(stok[ind].harga)
    let valImg  = stok[ind].img
    let newCart = new Cart(valName, valPrice, valImg)
    cartList.push(newCart)
    displayCart()
    countPrice()
    totalAmo++
    countAmount()
    checkout()
}

const displayCart = () => {
    var listCart = ''
    cartList.forEach((val) => {
        listCart += `<tr id='delete'>
                        <td>${val.nama}</td>
                        <td>${val.harga}</td>
                        <td>
                            <img src="${val.img}" alt="" width="150" height="150">
                        </td>
                        <td>
                            <input type="submit" value="Delete" onclick="deleteCart()">
                        </td>
                    </tr>` 
    })
    document.getElementById('displaycart').innerHTML = listCart
}

const deleteCart = () => {
    cartList.splice(0, 1)
    cartHarga.splice(0,1)
    totalAmo--
    if(totalAmo < 1) {
        location.reload()
    }
    countPrice()
    countAmount()
    document.getElementById('delete').remove()
}

const countPrice = () => {
    var totalSemua = 0
    for(let i=0; i<cartHarga.length; i++) {
        totalSemua+=cartHarga[i]
    }
    totaltotal = totalSemua
    document.getElementById('totalbayar').innerHTML = 
    `Total yang harus dibayar sebesar Rp. ${totalSemua}`
}

const countAmount = () => {
    document.getElementById('totalamo').innerHTML = 
    `Anda membeli sebanyak ${totalAmo}<br><br><u><b>Mohon hapus dari baris paling atas</u></b>`
}

const checkout = () => {
    output = ''
    output += `<input type="submit" value="Checkout!" onclick="check()">`

    document.getElementById('checkout').innerHTML = output
}

let end
let time = 20
let timer = document.getElementById('timer')

const countDown = () => {
    time--
    if(time == 0) {
        clearInterval(end)
        alert('Time is up! Please re-input your money')
        location.reload()
    } else {
        document.getElementById('timer').innerHTML = `<div>${time}/<div>`
    }
}

const check = () => {
    var sure = confirm('Are you sure?')
    if(sure) {
        end = setInterval(countDown, 1000);
        var output = ''
        output += 
        `<form action="" onsubmit="lastTotal(event)">
        <label for="money">Put money:</label>
        <input type="number" id="money">
        </form>`

        document.getElementById('moneyPut').innerHTML = output
    } else {
        alert('Get back to cart')
    }
}

const lastTotal = (e) => {
    e.preventDefault()
    var money = document.getElementById('money').value
    var result = 0
    if(money > totaltotal) {
        result = money - totaltotal
        alert(`Your changes are Rp.${result}`)
        location.reload()
    } else if (money == totaltotal) {
        alert('Thank you very much!')
        location.reload()
    } else {
        alert('Please re-input your money!')
    }
}