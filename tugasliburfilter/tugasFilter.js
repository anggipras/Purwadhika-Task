arrInput = [
    { id: 1579581080923,categ: 'Beverages' , name: "Ramen", price: 15000, stock : 20},
    { id: 1579581081130,categ: 'Electronic' , name: "Iphone", price: 7000000, stock :5},
    { id: 1579581081342,categ: 'Clothes' , name: "Pants", price: 100000, stock :15},
    { id: 1579581081577,categ: 'Electronic' , name: "Samsung", price: 4000000, stock :7}
  ]

var arrCateg = ["Select", "Electronic", "Beverages", "Clothes"]

const displayInput = () => {
    var listName = arrInput.map((val, ind) => {
        return (
            `<tr>
                <td>${val.id}</td>
                <td>${val.categ}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td>
                    <input type="submit" value="Delete" onclick="deleteProd(${ind})">
                </td>
                <td>
                    <input type="submit" value="Edit" onclick="editProd(${ind})">
                </td>
            </tr>`
        )
    }).join('')
    
    var listCateg = arrCateg.map(val => {
        return (
            `<option value='${val}'>${val}</option>`
        )
    }).join('')
    document.getElementById('categoryFilter').innerHTML = listCateg
    document.getElementById('categoryInput').innerHTML = listCateg
    document.getElementById('render').innerHTML = listName
}

const funInputData = () => {
    var name = document.getElementById('nameInput').value
    var price = document.getElementById('priceInput').value
    var categ = document.getElementById('categoryInput').value
    var stock = document.getElementById('stockInput').value
    var id = new Date().getTime()

    arrInput.push({id, categ, name, price, stock})
    console.log(arrInput)
    document.getElementById('nameInput').value = ''
    document.getElementById('priceInput').value = ''
    document.getElementById('categoryInput').value = ''
    document.getElementById('stockInput').value = ''
    displayInput()
}

const funFilter = () => {
    var inputName = document.getElementById('keyword').value
    var inputMax = document.getElementById('max').value
    var inputMin = document.getElementById('min').value
    var inputCateg = document.getElementById('categoryFilter').value

    var listChange = arrInput.filter(val => {
        var names = val.name.toLowerCase().includes(inputName.toLowerCase())
        if(!inputName) {
            names = true
        }
        var minMax = val.price >= inputMin && val.price <= inputMax
        if(!inputMin || !inputMax) {
            minMax = true
        }
        var catego = val.categ == inputCateg && inputCateg !== 'Select'
        if(inputCateg == 'Select') {
            catego = true
        }
        return names && minMax && catego //it will return to true
    })
    document.getElementById('render').innerHTML = displaying(listChange).join('')
}

const displaying = (filt) => {
    return filt.map(val => {
        return(
            `<tr>
                <td>${val.id}</td>
                <td>${val.categ}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
            </tr>`
        )
    })
}

displayInput()

const deleteProd = (getInd) => {
    arrInput.splice(getInd, 1)
    displayInput()
}

const editProd = (getInd) => {
    arrInput.splice(getInd, 1, { 
        id: arrInput[getInd].id,
        categ: `<input type="text" id="${getInd}">`,
        name: `<input type="text" id="${getInd}">`,
        price: `<input type="number" id="${getInd}">`,
        stock : `<input type="text" id="${getInd}">`
    })
    console.log(arrInput)
    displayInput()
}