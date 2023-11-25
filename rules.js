const back1 = document.getElementById("back1")
const click_effect = new Audio("sound.mp3");
back1.addEventListener("click",()=>{
    click_effect.play()
    setTimeout(()=>{
        window.location.href="./index.html"
    },100)
})

const nextButton = document.getElementById("next")
nextButton.addEventListener('click',()=>{
    click_effect.play()
    setTimeout(()=>{
        window.location.href="./signin.html"
    },100)
})
const music = new Audio("minecraft.mp3");
music.play();
music.loop()=true