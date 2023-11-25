const nameV= localStorage.getItem("nickname")
const welcomeLine = document.getElementById("welcomeLine")
welcomeLine.innerHTML=`Welcome ${nameV}!! Choose your difficulty level....`

const click_effect= new Audio("sound.mp3")
const back3 = document.getElementById("back3")
back3.addEventListener('click',()=>{
   click_effect.play()
   setTimeout(()=>{
      window.location.href="./signin.html"
   },100)
})
const beginners = document.getElementById("beginners")
const easy = document.getElementById("easy")
const medium= document.getElementById("medium")
const hard = document.getElementById("hard")
const veryHard = document.getElementById("veryHard")

 beginners.addEventListener("click",()=>{
   click_effect.play()
   setTimeout(()=>{
      window.location.href = "./beginners.html"
   },100)
 })

 easy.addEventListener("click",()=>{
   click_effect.play()
   setTimeout(()=>{
      window.location.href = "./easy.html"
   },100)
 })

 medium.addEventListener("click",()=>{
   click_effect.play()
   setTimeout(()=>{
      window.location.href = "./medium.html"
   },100)
 })

 hard.addEventListener("click",()=>{
   click_effect.play()
   setTimeout(()=>{
      window.location.href = "./hard.html"
   },100)
 })

 veryHard.addEventListener("click",()=>{
   click_effect.play()
   setTimeout(()=>{
      window.location.href = "./veryHard.html"
   },100)
 })
const music = new Audio("minecraft.mp3");
music.play();

localStorage.setItem("BeginnersScore",0)
localStorage.setItem("EasyScore",0)
localStorage.setItem("MediumScore",0)
localStorage.setItem("HardScore",0)
localStorage.setItem("VeryScore",0)