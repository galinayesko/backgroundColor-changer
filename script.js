const kokElemani = document.querySelector("#root")

const containerElemani = document.createElement("div")
containerElemani.classList.add("kutu1")
kokElemani.append(containerElemani)

const butonElemani = document.createElement("button")
butonElemani.classList.add("btn" , "btn-primary")
butonElemani.textContent = "Click Me!"
containerElemani.append(butonElemani)

butonElemani.addEventListener('click', (olay)=> {
    changeColors()
})

let index = 0;

function changeColors() {
    let colors = [ "red","blue","orange","green","yellow","green","purple"];
    
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if (index > colors.length - 1)
        index = 0;

}
