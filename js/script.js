const word = document.querySelector(".word"),
hintTxt = document.querySelector(".hint span"),
time = document.querySelector(".time b"),
field = document.querySelector("input"),
attemptBtn = document.querySelector(".another-attempt"),
answerBtn = document.querySelector(".check-answer");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return time.innerText = maxTime;
        }
        alert(`Time up! ${correctWord.toUpperCase()} was the correct answer`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = wordseasy[Math.floor(Math.random() * wordseasy.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    word.innerText = wordArray.join("");
    hintTxt.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    field.value = "";
    field.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = field.value.toLowerCase();
    if(!userWord) return alert("Please enter your answer to check!");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct answer`);
    alert(`Hurray! ${correctWord.toUpperCase()} is the correct answer`);
    initGame();
}

attemptBtn.addEventListener("click", initGame);
answerBtn.addEventListener("click", checkWord);

