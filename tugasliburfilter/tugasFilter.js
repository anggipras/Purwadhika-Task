arrInput = []

const funInputData = () => {
    var name = document.getElementById('nameInput').value
    var price = document.getElementById('priceInput').value
    var categ = document.getElementById('categoryInput').value
    var stock = document.getElementById('stockInput').value
    var date = new Date()
    var id = date.getTime()

    var obj = {id, categ, name, price, stock}
    arrInput.push(obj)
    displayInput()
}

const displayInput = () => {
    var listInput = arrInput.map(val => {
        return (
            `<tr>
                <td>${val.id}</td>
                <td>${val.categ}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
            </tr>`
        )
    })
    document.getElementById('render').innerHTML = listInput.join('')
}

const funFilterName = () => {
    var input = document.getElementById('keyword').value
    var listChange = arrInput.filter(val => val.name.includes(input))

    var displayChange = listChange.map(val => {
        for(let i=0; i<arrInput.length; i++) {
            if(arrInput[i].name == val.name) {
                return  `<tr>
                            <td>${arrInput[i].id}</td>
                            <td>${arrInput[i].categ}</td>
                            <td>${arrInput[i].name}</td>
                            <td>${arrInput[i].price}</td>
                            <td>${arrInput[i].stock}</td>
                        </tr>`
            }  
        }
    })
    document.getElementById('render').innerHTML = displayChange.join('')
}

const funFilterCategory = (select) => {
    var listChange = arrInput.filter(val => val.categ.includes(select.value)) //new array of selected categ in arrInput array

    var displayChange = listChange.map(val => {
        return  `<tr>
                    <td>${val.id}</td>
                    <td>${val.categ}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                </tr>`
    })
    document.getElementById('render').innerHTML = displayChange.join('')
}

const funFilterPriceMin = () => {
    var input = document.getElementById('min').value

    var filtered = arrInput.filter(val => val.price >= input)

    var displayChange = filtered.map(val => {
        return  `<tr>
                    <td>${val.id}</td>
                    <td>${val.categ}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                </tr>`
    })
    document.getElementById('render').innerHTML = displayChange.join('')
}

const funFilterPriceMax = () => {
    var input = document.getElementById('max').value

    var filteredMax = arrInput.filter(val => val.price <= input)
    console.log(filteredMax)

    var displayChangeMax = filteredMax.map(val => {
        return  `<tr>
                    <td>${val.id}</td>
                    <td>${val.categ}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                </tr>`
    })
    document.getElementById('render').innerHTML = displayChangeMax.join('')
    console.log(displayChangeMax)
}