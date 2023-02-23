const buttonInput = document.querySelector('button')

document.body.addEventListener('keyup',function(event){
    playSound(event.code.toLowerCase())
})

buttonInput.addEventListener('click',function(){
    let input = document.querySelector('#input').value
    if(input != ''){
        let songArray = input.split('')
        playComposition(songArray)
    }
})

function playSound(sound){
    let audioElemnet = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if(audioElemnet){
        audioElemnet.currentTime = 0
        audioElemnet.play()
        borderKey(keyElement)
    }
}

function borderKey(keyElement){
    keyElement.classList.add('active')

    setTimeout(function(){
        keyElement.classList.remove('active')

    }, 300)
}

function playComposition(songArray) {
    let wait = 0;
    for(let songItem of songArray) {
    setTimeout(()=>{
    playSound(`key${songItem}`)
    }, wait);
    wait += 250;
    }
}