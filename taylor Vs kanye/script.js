const taylor = document.querySelector('.taylor');
const kanye = document.querySelector('.kanye');

audioStart = new Audio('./soung/taylor.mp3')
audioGameOver= new Audio('./soung/kanye.mp3')

const jump = () => {
    taylor.classList.add('jump')
    audioStart.play()

    setTimeout(() => {
        taylor.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const kanyePosition = kanye.offsetLeft;
    const taylorPosition = +window.getComputedStyle(taylor).bottom.replace('px', '');
    
    if (kanyePosition < 90 && kanyePosition > 0 && taylorPosition < 90){

        kanye.style.animation = 'none';
        kanye.style.left = `${kanyePosition}px`;

        taylor.style.animation = 'none';
        taylor.style.bottom = `${taylorPosition}px`;

        taylor.src = 'MEUMZJQ.gif'
        taylor.style.width = '80px'
        taylor.style.marginLeft = '50px'
        audioGameOver.play()
        clearInterval(loop);
    }

}, 10);



document.addEventListener('keypress', jump);