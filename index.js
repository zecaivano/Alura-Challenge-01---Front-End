const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.botao-highlight')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" id="codigo__campo" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

const linguagemd = document.querySelector('.linguagem-d')
const areaDoCodigod = document.querySelector('.codigo-wrapper-d')
const botaod = document.querySelector('.botao-highlight-d')

function aplicaHighlightd() {
    const codigod = areaDoCodigod.innerText
    areaDoCodigod.innerHTML = `<code class="preview hljs ${linguagemd.value}" id="codigo__campo-desktop" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigod.querySelector('code').textContent = codigod
    hljs.highlightElement(areaDoCodigod.querySelector('code'))
}

botaod.addEventListener('click', () => {
    aplicaHighlightd()
})