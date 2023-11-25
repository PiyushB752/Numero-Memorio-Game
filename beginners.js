const back4 = document.getElementById("back4");
back4.addEventListener("click", () => {
    window.location.href = "./difficulty.html";
});
 
const music= new Audio("time-levels.mp3")
music.play()
music.loop=true

const nameVal = document.getElementById('Nameval');
nameVal.innerHTML = localStorage.getItem("nickname");

let score = 0;
var randomNumber = 0;

function newRound() {
     randomNumber = Math.floor(Math.random() * 1000);
    document.getElementById("displayBox").innerHTML = randomNumber;

    const ansSection = document.getElementById("answerSection");
    let time = 2;
    const timer = document.getElementById("time");

    function timertime() {
        const timerId = setInterval(() => {
            if (time > 0) {
                time--;
                timer.innerHTML = time;
            } else {
                clearInterval(timerId);
                document.getElementById("displayBox").innerHTML = "0";
                ansSection.style.display = "inline";
                submitButton.style.display="inline"
            }
        }, 1000);
    }
    timertime();

   
}

newRound();

const submitButton = document.getElementById("Submit");

submitButton.addEventListener("click", () => {
    const answerBox = document.getElementById("answerBox");
    const ansSection = document.getElementById("answerSection");

    if (parseInt(answerBox.value) === randomNumber) {
        score++;
        localStorage.setItem("BeginnersScore", score);
        ansSection.style.display = "none";
        submitButton.style.display = "none";
        document.getElementById("scoreNum").innerHTML = `${score}`;
        answerBox.value=""
        document.getElementById("time").innerHTML=2
        newRound();
    }else if(parseInt(answerBox.value) !== randomNumber){
        window.location.href="./beginnersScore.html";
    } 
});
