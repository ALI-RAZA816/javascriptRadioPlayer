const song = document.querySelector(".song");
const playBtn = document.querySelector('.playBtn');
const rotatingDisc = document.querySelector('.rotatingDisc');
const toneHead = document.querySelector('.toneHead');
const songVolume = document.querySelector('.volume');
let state = false;

playBtn.addEventListener('click',()=>{
    if(state === false){
        setTimeout(()=>{
            song.play();
        },1000);
        toneHead.classList.add('active');
        rotatingDisc.classList.add('active');
    }else{
        song.pause();
        toneHead.classList.remove('active');
        rotatingDisc.classList.remove('active');
    }
    state = !state;
});

songVolume.addEventListener('input',(event)=>{
    const volume = event.target.value / 100;
    song.volume = volume;
});

song.addEventListener("timeupdate",()=>{
    if(song.currentTime === song.duration){
       song.pause();
       toneHead.classList.remove('active');
       rotatingDisc.classList.remove('active');
    }
})
