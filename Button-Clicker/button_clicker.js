const btnSoma = document.querySelector("#btn-soma")
const btnSubtracao = document.querySelector("#btn-subtacao")
const resultado = document.querySelector("#result")

btnSoma.addEventListener("click", function(){
    resultado.textContent = Number(resultado.textContent) + 1
})

btnSubtracao.addEventListener("click", function(){
    resultado.textContent = Number(resultado.textContent) - 1
})