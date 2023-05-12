let button = document.getElementById("button")
let paragrafo = document.getElementById("textAdd")

const AddText = () => { 
  let text = "Você clicou no botão"
  paragrafo.innerHTML = text

}

button.addEventListener("click", () => AddText());