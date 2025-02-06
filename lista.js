function clique() {
    const textInput = document.getElementById('ttexto')
    const product = document.createElement('li')
    product.innerHTML = textInput.value + '<span onclick="delet(this)">❌</span>'

    document.querySelector('ul').appendChild(product)

    if(textInput.value.length == '') {
        alert('item inválido.')
        product.style.display = 'none'
    }

    textInput.value = ''
}

function delet(product) {
    product.parentElement.remove()
}
