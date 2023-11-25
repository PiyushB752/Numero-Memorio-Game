const next2 = document.getElementById("next2");
const click_effect= new Audio("sound.mp3")
next2.addEventListener("click", () => {
    click_effect.play()
    setTimeout(()=>{
        const NameV = document.getElementById("nameInput").value
        const NicknameV = document.getElementById("nicknameInput").value
        if (NameV.trim()==="" || NicknameV.trim()===""){
        alert("Please enter the required field.");
        } else{
        window.location.href = "./difficulty.html";
        localStorage.setItem("name",document.getElementById("nameInput").value)
        localStorage.setItem("nickname",document.getElementById("nicknameInput").value)
        }
    },100)  
});
const back2 = document.getElementById("back2")
back2.addEventListener("click",()=>{
    click_effect.play()
    setTimeout(()=>{
        window.location.href="./rules.html"
    },100)
})
const music = new Audio("minecraft.mp3");
music.play();
music.loop=true
