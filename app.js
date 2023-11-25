const play = document.getElementById("play");
const click_effect = new Audio("sound.mp3");
play.addEventListener('click', () => {
    click_effect.play();
    setTimeout(() => {
        window.location.href = "./rules.html";
    }, 100);
});
const music = new Audio("minecraft.mp3");
music.play();
music.loop=true

  