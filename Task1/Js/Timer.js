
let sec = 1

let interval = 1000 * sec 

let time = 0
let clock = document.querySelector("#Timer")
// callback 
setInterval(increment,interval)
//The setInterval() method calls a function at specified intervals (in milliseconds).

let On = false


function increment(){
    if(On){
        time ++
        clock.innerHTML = time
    }
}

function Start(){
    On= true
}

function Stop(){
    On = false
}
