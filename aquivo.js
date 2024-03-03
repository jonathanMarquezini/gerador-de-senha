let senhaInicial = 16
const inputEl1 = document.querySelector("#localSenha")
const letraMaiusculaEl = document.querySelector("#m-maiuscula")
const numbersEl = document.querySelector("#n-numbers")
const symbolsEl = document.querySelector("#s-symbols")
const segurancaColor = document.querySelector("#cor-de-seguranca")

function geradorDeSenha() {
    let conjuntoCaract = "abcdefghjklmnpqrstuvwsyz"
    
    const maiusculas = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numbers = "123456789"
    const symbols = "!@&${}[]"

    if(letraMaiusculaEl.checked) {
        conjuntoCaract += maiusculas
    } 
    if(numbersEl.checked) {
        conjuntoCaract += numbers
    }
    if(symbolsEl.checked) {
        conjuntoCaract += symbols
    }

    let vazio = ""

    for(let x = 0; x < senhaInicial; x++) {
        const randomizacao = Math.floor(Math.random() * conjuntoCaract.length)
        vazio += conjuntoCaract.substring(randomizacao, randomizacao + 1)
    }

    inputEl1.value = vazio
    qualidadeSeguranca()
    letrasFontiSize()
}

function letrasFontiSize() {
    if(inputEl2 > 66) {
        inputEl1.classList.add("font-size-menor")
        inputEl1.classList.remove("font-size-medio")
        inputEl1.classList.remove("font-size-maior")
    } else if(inputEl2 > 33) {
        inputEl1.classList.remove("font-size-menor")
        inputEl1.classList.add("font-size-medio")
        inputEl1.classList.remove("font-size-maior")
    } else {
        inputEl1.classList.remove("font-size-menor")
        inputEl1.classList.remove("font-size-medio")
        inputEl1.classList.add("font-size-maior")
    }
}

function qualidadeSeguranca() {
    const percentual = Math.round((senhaInicial / 64) * 100)
    segurancaColor.style.width = `${percentual}%`    

    if(percentual > 66) {
        segurancaColor.classList.add("safe")
        segurancaColor.classList.remove("warning")
        segurancaColor.classList.remove("critical")
    } else if(percentual > 33) {
        segurancaColor.classList.remove("safe")
        segurancaColor.classList.add("warning")
        segurancaColor.classList.remove("critical")
    } else {
        segurancaColor.classList.remove("safe")
        segurancaColor.classList.remove("warning")
        segurancaColor.classList.add("critical")
    }
}

function copy() {
    navigator.clipboard.writeText(inputEl1.value)
}

const inputEl2 = document.querySelector("#localRange")
inputEl2.addEventListener("input", () => {
    senhaInicial = inputEl2.value
    document.querySelector("#tamanhoCaracteres").innerText = senhaInicial
    geradorDeSenha()
})

letraMaiusculaEl.addEventListener("click", geradorDeSenha)
numbersEl.addEventListener("click", geradorDeSenha)
symbolsEl.addEventListener("click", geradorDeSenha)

const buttonEl = document.querySelector("#btn") // function copy
buttonEl.addEventListener("click", copy)

geradorDeSenha()
copy()