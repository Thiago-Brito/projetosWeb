const music = new Audio("acorda.mp3")

const buttonPlay = document.querySelector('.play')
buttonPlay.addEventListener('click', playMusic)
const buttonPause = document.querySelector('.pause')
buttonPause.addEventListener('click',pauseMusic)

const buttonPlay2 = document.querySelector('.play2')
buttonPlay2.addEventListener('click', playMusic)
const buttonPause2 = document.querySelector('.pause2')
buttonPause2.addEventListener('click',pauseMusic)

const buttonPlay3 = document.querySelector('.play3')
buttonPlay3.addEventListener('click', playMusic)
const buttonPause3 = document.querySelector('.pause3')
buttonPause3.addEventListener('click',pauseMusic)


const buttonLess = document.querySelector('.less')
buttonLess.addEventListener('click',lessMusic)
const buttonLess2 = document.querySelector('.less2')
buttonLess2.addEventListener('click',lessMusic)
const buttonLess3 = document.querySelector('.less3')
buttonLess3.addEventListener('click',lessMusic)

const buttonMore = document.querySelector('.more')
buttonMore.addEventListener('click',moreMusic)
const buttonMore2 = document.querySelector('.more2')
buttonMore2.addEventListener('click',moreMusic)
const buttonMore3 = document.querySelector('.more3')
buttonMore3.addEventListener('click',moreMusic)






function lessMusic(){
    music.currentTime = music.currentTime - 10
}

function moreMusic(){
    music.currentTime = music.currentTime + 10
}



function playMusic(){
    music.play()
    buttonPlay.classList.add('hide')
    buttonPlay2.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonPause2.classList.remove('hide')
    buttonPlay3.classList.add('hide')
    buttonPause3.classList.remove('hide')
}



function pauseMusic(){
    music.pause()
    buttonPlay.classList.remove('hide')
    buttonPlay2.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPause2.classList.add('hide')
    buttonPlay3.classList.remove('hide')
    buttonPause3.classList.add('hide')
}

music.addEventListener('timeupdate', function(){
    let barra = document.querySelector('progress')
    let barra2 = document.querySelector('.barra2')

    barra.value = Math.floor((music.currentTime / music.duration) * 100) ;
    barra2.value = barra.value

    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
    let tempoDecorrido2 = document.querySelector('.inicio2');
    tempoDecorrido2.textContent = tempoDecorrido.textContent

    let fim = document.querySelector('.fim')
    let fim2 = document.querySelector('.fim2')
    fim.textContent =segundosParaMinutos(Math.floor(173-music.currentTime))
    fim2.textContent = fim.textContent
})

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

