const crossword = document.querySelector(".crossword");

const subtitle1 = document.getElementById("subtitle1");
const subtitle2 = document.getElementById("subtitle2");
const subtitle3 = document.getElementById("subtitle3");
const subtitle4 = document.getElementById("subtitle4");
const subtitle5 = document.getElementById("subtitle5");
const subtitle6 = document.getElementById("subtitle6");
const subtitle7 = document.getElementById("subtitle7");
const subtitle8 = document.getElementById("subtitle8");
const subtitle9 = document.getElementById("subtitle9");
const subtitle10 = document.getElementById("subtitle10");
const subtitle11 = document.getElementById("subtitle11");
const subtitle12 = document.getElementById("subtitle12");
const subtitle13 = document.getElementById("subtitle13");
const subtitle14 = document.getElementById("subtitle14");
const subtitle15 = document.getElementById("subtitle15");
const subtitle16 = document.getElementById("subtitle16");
const subtitle17 = document.getElementById("subtitle17");
const subtitle18 = document.getElementById("subtitle18");

const finalText = document.getElementById("finalText");

let words = [
    ["", "1", "", "", "", "", "", "", ""],
    ["", "z", "", "", "", "", "3", "", ""],
    ["2", "o", "n", "e", "p", "i", "e", "c", "e"],
    ["", "r", "", "", "", "", "n", "", ""],
    ["", "o", "", "", "", "", "e", "", ""],
    ["", "", "", "", "", "", "l", "", ""]
];

let wordsResponse = [
    ["", "", "", "", "", "", "", "", ""],
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
    let score = 0;

    if (wordsResponse[1][1] != "" && wordsResponse[2][1] != "" && wordsResponse[3][1] != "" && wordsResponse[4][1] != "") {
        score++;
        subtitle1.classList.add("right");
    } else {
        subtitle1.classList.remove("right");
    }

    if (wordsResponse[2][1] != "" && wordsResponse[2][2] != "" && wordsResponse[2][3] != "" && wordsResponse[2][4] != "" && wordsResponse[2][5] != "" && wordsResponse[2][6] != "" && wordsResponse[2][7] != "" && wordsResponse[2][8] != "") {
        score++;
        subtitle2.classList.add("right");
    } else {
        subtitle2.classList.remove("right");
    }

    if (wordsResponse[2][6] != "" && wordsResponse[3][6] != "" && wordsResponse[4][6] != "" && wordsResponse[5][6] != "") {
        score++;;
        subtitle3.classList.add("right");
    } else {
        subtitle3.classList.remove("right");
    }

    if (score == 3) {
        finalText.classList.add("active");
    } else {
        finalText.classList.remove("active");
    }
}

window.addEventListener("load", () => {
    for (let line = 0; line < words.length; line++) {
        for (let column = 0; column < words[line].length; column++) {
            if (words[line][column] == "-") {
                crossword.innerHTML += `<input disabled class="empty-input" value="-">`;
            } else if (Number(words[line][column]) > 0) {
                crossword.innerHTML += `<input disabled class="empty-input" value="${words[line][column]}.">`;
            } else if (words[line][column] == "") {
                crossword.innerHTML += `<input disabled class="empty-input">`;
            } else {
                crossword.innerHTML += `<input maxlength="1" oninput="verifyInput(this), validateResponse()" data-letter="${words[line][column]}" data-line="${line}" data-column="${column}">`;
            }
        }
        crossword.innerHTML += "<br>";
    }
});