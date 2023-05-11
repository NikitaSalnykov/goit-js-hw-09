const refs = {
start: document.querySelector('button[data-start]'),
stop: document.querySelector('button[data-stop]'),
}

let intervalID = null
let isActive = false
refs.start.disabled = false
refs.stop.disabled = true

refs.start.addEventListener('click', onStart)
refs.stop.addEventListener('click', onStop)

function onStart(e) {
    if (isActive) {
        return
    }
switchColors()
intervalID = setInterval((switchColors), 1000)
isActive = true
    refs.start.disabled = true
    refs.stop.disabled = false
}

function onStop(e) {
    clearInterval(intervalID)
    isActive = false
    refs.start.disabled = false
    refs.stop.disabled = true
}
 
function switchColors() {
let randomColorRGB = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    document.body.style.background = `${randomColorRGB}`
    console.log(randomColorRGB);
}

