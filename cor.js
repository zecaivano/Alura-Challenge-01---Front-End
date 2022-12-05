const codigo = document.querySelector(".codigo")
const selecionaCor = document.querySelector('.seleciona__cor')

function aplicaCor(){
    codigo.classList.remove("cor1", "cor2", "cor3", "cor4", "cor5")
    codigo.classList.add(selecionaCor.value)
    selecionaCor.classList.remove("cor1", "cor2", "cor3", "cor4", "cor5")
    selecionaCor.classList.add(selecionaCor.value)
}

selecionaCor.addEventListener('click', () => {
    aplicaCor()
})

//Desktop
const codigoD = document.querySelector(".codigo-d")
const selecionaCorD = document.querySelector('.seleciona__cor-d')

function aplicaCorD(){
    codigoD.classList.remove("cor1", "cor2", "cor3", "cor4", "cor5")
    codigoD.classList.add(selecionaCorD.value)
    selecionaCorD.classList.remove("cor1", "cor2", "cor3", "cor4", "cor5")
    selecionaCorD.classList.add(selecionaCorD.value)
}

selecionaCorD.addEventListener('click', () => {
    aplicaCorD()
})
