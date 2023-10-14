let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'
let cidade
let primeiroNumero = parseInt(Math.random() *100 + 1)
let segundoNumero = parseInt(Math.random() * 100 + 1)
let resultado = (primeiroNumero + segundoNumero)

function verificarConsole() {
    console.log('o butao foi clicado')
}
function verificarAlerta() {
    console.log('Eu amo JS')
}
function butaoPrompt() {
   cidade = prompt('Chute uma cidadde brasileira!')
   alert(`Estive em ${cidade} e lembrei de você. `)
}

function calculadora() {
    alert(`O resultado é ${resultado}`)

}
