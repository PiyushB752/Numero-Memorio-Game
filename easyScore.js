const music = new Audio("minecraft.mp3")
music.play()
music.loop=true

const click_effect = new Audio("sound.mp3")

const playAgain = document.getElementById('playAgain')
playAgain.addEventListener("click",()=>{
    click_effect.play()
    setTimeout(()=>{
        window.location.href="./easy.html"
        localStorage.setItem("EasyScore",0)
    },300)
})

const changeDifficulty = document.getElementById('changeDifficulty')
changeDifficulty.addEventListener("click",()=>{
    click_effect.play()
    setTimeout(()=>{
        window.location.href="./difficulty.html"
        localStorage.setItem("EasyScore",0)
    },300)
})

const score = localStorage.getItem("EasyScore")
const nickname = localStorage.getItem("nickname")

document.getElementById("score").innerHTML=score
document.getElementById('nickname').innerHTML=nickname