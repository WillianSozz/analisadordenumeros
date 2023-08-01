alert('Bem vindo ao analisador de números, este software tem como objetivo: somar, dizer o maior e o menor, e tambem tirar a media de qualquer número situado entre 1 e 1000. Espero que gostem!!')
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 1000) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) ) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.lenght == 0) {
    alert('Adicione valores antes de finalizar!')
} else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior)
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML = '<p>Resultado:<p>'
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
}
}