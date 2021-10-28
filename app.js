const w = window;
const d = document;
const span = d.querySelectorAll('span')

w.addEventListener('keydown', (e) => {
    const key = d.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio =  d.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; //IF AUDIO == NULL EL not DEVUELVE TRUE Y CORTA LA FUNCION
    //ENTONCES NO SALTA NULL EN CONSOLA
    
    key.children[1].classList.add('active')
    audio.currentTime = 0;
    audio.play()
})


span.forEach((element) => {
console.log(element)
    element.addEventListener('transitionend', (e) => {
        if(e.propertyName !== 'transform') return;
        element.classList.remove('active')
    })
})
