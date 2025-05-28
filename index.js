const pianoKeys = document.querySelectorAll('.piano-keys .key');

const playTune = (key) => {

    let audio = new Audio(`tunes/${key}.wav`);
    audio.play();
}

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    
}); 