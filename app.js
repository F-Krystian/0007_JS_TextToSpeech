const inputText = document.querySelector('.text-input');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
let speaking = false;

const speakingControl = function() {
  let speech = new SpeechSynthesisUtterance();
  
  if (!speaking) { // If not speaking, start speaking
    speech.text = inputText.value;
    speech.onend = function() {
      playBtn.classList.toggle('pause-btn');
      playBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span> Play';
      speaking = false;
    };
    if (!speechSynthesis.speaking) {
      speechSynthesis.speak(speech);
    } else {
      speechSynthesis.resume();
    }
    playBtn.classList.toggle('pause-btn');
    playBtn.innerHTML = '<span class="material-symbols-outlined">pause</span> Pause';
    speaking = true;
  } else { // If speaking, pause speaking
    speechSynthesis.pause();
    playBtn.classList.toggle('pause-btn');
    playBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span> Resume';
    speaking = false;
  }
};

// Events
playBtn.addEventListener('click', (e) => {
  e.preventDefault();
  speakingControl(inputText);
});


inputText.addEventListener('change', () => {
  if (!speaking) {
    playBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span> Play';
  }
});