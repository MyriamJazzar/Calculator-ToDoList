let dark = true
let message = document.querySelector("a")
let image = document.querySelector("img")
/*let x = document.querySelector("input")*/
/*let box = document.querySelector("Box")*/
function Change(){
    if(dark == true){
        message.style.color = "white"
        document.body.style.color = "white"
        /*box.style.background-color ="white"*/
        document.body.style.background = "#000106"
        image.src="../Imgs/sun.png"
        /*x.style.color = "white"*/
    
    }else{
        /*box.style.background-color="#bbd2e1"*/
        document.body.style.color = "black"
        message.style.color = "black"
        document.body.style.background = "white"
        image.src="../Imgs/moon.png"
        /*x.style.color="black"*/
        
    }
    dark = !dark
}