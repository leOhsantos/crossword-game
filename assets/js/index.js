const gameContainer = document.querySelector(".game-container");
const resultContainer = document.querySelector(".result-container");

let words = [
    ["", "z", "", "", "", "", "", "", ""],
    ["", "o", "n", "e", "p", "i", "e", "c", "e"],
    ["", "r", "", "", "", "", "n", "", ""],
    ["", "o", "", "", "", "", "e", "", ""],
    ["", "", "", "", "", "", "l", "", ""]
];

let wordsResponse = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]
];

function verifyInput(input) {
    let letter = input.getAttribute("data-letter");
    let line = Number(input.getAttribute("data-line"));
    let column = Number(input.getAttribute("data-column"));

    if ((input.value).toLowerCase() == letter.toLowerCase()) {
        wordsResponse[line][column] = letter;
    } else {
        wordsResponse[line][column] = "";
    }
}

function validateResponse() {
    resultContainer.innerHTML = "";
    let score = 0;

    if (wordsResponse[0][1] != "" && wordsResponse[1][1] != "" && wordsResponse[2][1] != "" && wordsResponse[3][1] != "") {
        score++;
        resultContainer.innerHTML += `Zoro - correto <br>`;
    }

    if (wordsResponse[1][1] != "" && wordsResponse[1][2] != "" && wordsResponse[1][3] != "" && wordsResponse[1][4] != "" && wordsResponse[1][5] != "" && wordsResponse[1][6] != "" && wordsResponse[1][7] != "" && wordsResponse[1][8] != "") {
        score++;
        resultContainer.innerHTML += `One Piece - correto <br>`;
    }

    if (wordsResponse[1][6] != "" && wordsResponse[2][6] != "" && wordsResponse[3][6] != "" && wordsResponse[4][6] != "") {
        score++;;
        resultContainer.innerHTML += `Enel - correto <br>`;
    }

    if (score == 3) {
        resultContainer.innerHTML += `Todas as palavras estão corretas!`;
    }
}

window.addEventListener("load", () => {
    for (let line = 0; line < words.length; line++) {
        for (let column = 0; column < words[line].length; column++) {
            if (words[line][column] == "") {
                gameContainer.innerHTML += `<input disabled class="empty-input">`;
            } else {
                gameContainer.innerHTML += `<input maxlength="1" oninput="verifyInput(this), validateResponse()" data-letter="${words[line][column]}" data-line="${line}" data-column="${column}">`;
            }
        }
        gameContainer.innerHTML += "<br>";
    }
});