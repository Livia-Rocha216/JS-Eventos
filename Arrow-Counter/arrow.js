const resultado = document.querySelector("#result")

document.addEventListener("keydown", function(event){
    if(event.key == "ArrowUp"){
        resultado.textContent = Number(resultado.textContent) + 1
    }    
})

document.addEventListener("keydown", function(event){
    if(event.key == "ArrowDown"){
        resultado.textContent = Number(resultado.textContent) - 1  
    }    
})