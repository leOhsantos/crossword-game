const crossword = document.querySelector(".crossword");
const inputs = document.getElementsByTagName("input");

const answer = document.querySelectorAll(".answer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answer6 = document.getElementById("answer6");
const answer7 = document.getElementById("answer7");
const answer8 = document.getElementById("answer8");
const answer9 = document.getElementById("answer9");
const answer10 = document.getElementById("answer10");
const answer11 = document.getElementById("answer11");
const answer12 = document.getElementById("answer12");
const answer13 = document.getElementById("answer13");
const answer14 = document.getElementById("answer14");
const answer15 = document.getElementById("answer15");
const answer16 = document.getElementById("answer16");
const answer17 = document.getElementById("answer17");
const answer18 = document.getElementById("answer18");

const finalTextContainer = document.querySelector(".final-text-container");
const resetBtn = document.getElementById("resetBtn");

let words = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "6.", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "17.", "T", "H", "R", "E", "A", "D", "S", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "P", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "9.", "", "", "", "", "", "", "", "", "", "", "R", "", "", "", "12.", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "D", "", "", "", "", "14.", "", "", "15.", "", "", "O", "", "", "", "D", "", "", "", "", "", "", "", "", "1.", ""],
    ["", "", "", "8.", "M", "E", "M", "O", "R", "I", "A", "-", "D", "E", "-", "M", "A", "S", "S", "A", "", "", "", "", "", "", "", "", "C", ""],
    ["", "", "18.", "C", "A", "C", "H", "E", "", "7", "", "2.", "U", "L", "A", "", "", "", "", "T", "", "", "", "", "", "", "", "", "P", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "A", "", "", "", "", "", "11.", "A", "D", "D", "R", "E", "S", "S", "-", "B", "U", "S"],
    ["", "", "", "", "", "", "", "", "", "", "7.", "F", "L", "A", "S", "H", "", "", "", "-", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "-", "", "", "", "", "", "", "B", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "16.", "Q", "U", "A", "D", "-", "C", "O", "R", "E", "", "", "", "U", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "5.", "R", "O", "M", "", "", "", "10.", "C", "S", "", "", "", "", "", "", "", "", "", ""],
    ["", "4.", "", "", "13.", "", "", "", "", "", "", "", "R", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["3.", "R", "E", "G", "I", "S", "T", "R", "A", "D", "O", "R", "E", "S", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "A", "", "", "5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "M", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

let wordsResponse = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

function checkInput(input) {
    let letter = input.getAttribute("data-letter");
    let line = Number(input.getAttribute("data-line"));
    let column = Number(input.getAttribute("data-column"));

    if ((input.value).toLowerCase() == letter.toLowerCase()) {
        wordsResponse[line][column] = letter;
    } else {
        wordsResponse[line][column] = "";
    }
}

function validateWord() {
    let score = 0;

    //tip 1
    if (wordsResponse[5][28] != "" && wordsResponse[6][28] != "" && wordsResponse[7][28] != "") {
        score++;
        answer1.classList.add("right");
    } else {
        answer1.classList.remove("right");
    }

    //tip 2
    if (wordsResponse[6][12] != "" && wordsResponse[6][13] != "" && wordsResponse[6][14] != "") {
        score++;
        answer2.classList.add("right");
    } else {
        answer2.classList.remove("right");
    }

    //tip 3
    if (wordsResponse[13][1] != "" && wordsResponse[13][2] != "" && wordsResponse[13][3] != "" && wordsResponse[13][4] != "" && wordsResponse[13][5] != "" && wordsResponse[13][6] != "" && wordsResponse[13][7] != "" && wordsResponse[13][8] != "" && wordsResponse[13][9] != "" && wordsResponse[13][10] != "" && wordsResponse[13][11] != "" && wordsResponse[13][12] != "" && wordsResponse[13][13] != "") {
        score++;
        answer3.classList.add("right");
    } else {
        answer3.classList.remove("right");
    }

    //tip 4
    if (wordsResponse[13][1] != "" && wordsResponse[14][1] != "" && wordsResponse[15][1] != "") {
        score++;
        answer4.classList.add("right");
    } else {
        answer4.classList.remove("right");
    }

    //tip 5
    if (wordsResponse[11][11] != "" && wordsResponse[11][12] != "" && wordsResponse[11][13] != "") {
        score++;
        answer5.classList.add("right");
    } else {
        answer5.classList.remove("right");
    }

    //tip 6
    if (wordsResponse[1][15] != "" && wordsResponse[2][15] != "" && wordsResponse[3][15] != "" && wordsResponse[4][15] != "" && wordsResponse[5][15] != "") {
        score++;
        answer6.classList.add("right");
    } else {
        answer6.classList.remove("right");
    }

    //tip 7
    if (wordsResponse[8][11] != "" && wordsResponse[8][12] != "" && wordsResponse[8][13] != "" && wordsResponse[8][14] != "" && wordsResponse[8][15] != "") {
        score++;
        answer7.classList.add("right");
    } else {
        answer7.classList.remove("right");
    }

    //tip 8
    if (wordsResponse[5][4] != "" && wordsResponse[5][5] != "" && wordsResponse[5][6] != "" && wordsResponse[5][7] != "" && wordsResponse[5][8] != "" && wordsResponse[5][9] != "" && wordsResponse[5][10] != "" && wordsResponse[5][12] != "" && wordsResponse[5][13] != "" && wordsResponse[5][15] != "" && wordsResponse[5][16] != "" && wordsResponse[5][17] != "" && wordsResponse[5][18] != "" && wordsResponse[5][19] != "") {
        score++;
        answer8.classList.add("right");
    } else {
        answer8.classList.remove("right");
    }

    //tip 9
    if (wordsResponse[4][4] != "" && wordsResponse[5][4] != "" && wordsResponse[6][4] != "") {
        score++;
        answer9.classList.add("right");
    } else {
        answer9.classList.remove("right");
    }

    //tip 10
    if (wordsResponse[11][18] != "" && wordsResponse[11][19] != "") {
        score++;
        answer10.classList.add("right");
    } else {
        answer10.classList.remove("right");
    }

    //tip 11
    if (wordsResponse[7][19] != "" && wordsResponse[7][20] != "" && wordsResponse[7][21] != "" && wordsResponse[7][22] != "" && wordsResponse[7][23] != "" && wordsResponse[7][24] != "" && wordsResponse[7][25] != "" && wordsResponse[7][27] != "" && wordsResponse[7][28] != "" && wordsResponse[7][29] != "") {
        score++;
        answer11.classList.add("right");
    } else {
        answer11.classList.remove("right");
    }

    //tip 12
    if (wordsResponse[4][19] != "" && wordsResponse[5][19] != "" && wordsResponse[6][19] != "" && wordsResponse[7][19] != "" && wordsResponse[9][19] != "" && wordsResponse[10][19] != "" && wordsResponse[11][19] != "") {
        score++;
        answer12.classList.add("right");
    } else {
        answer12.classList.remove("right");
    }

    //tip 13
    if (wordsResponse[13][4] != "" && wordsResponse[14][4] != "") {
        score++;
        answer13.classList.add("right");
    } else {
        answer13.classList.remove("right");
    }

    //tip 14
    if (wordsResponse[5][9] != "" && wordsResponse[6][9] != "") {
        score++;
        answer14.classList.add("right");
    } else {
        answer14.classList.remove("right");
    }

    //tip 15
    if (wordsResponse[5][12] != "" && wordsResponse[6][12] != "" && wordsResponse[7][12] != "" && wordsResponse[8][12] != "" && wordsResponse[10][12] != "" && wordsResponse[11][12] != "" && wordsResponse[12][12] != "" && wordsResponse[13][12] != "") {
        score++;
        answer15.classList.add("right");
    } else {
        answer15.classList.remove("right");
    }

    //tip 16
    if (wordsResponse[10][7] != "" && wordsResponse[10][8] != "" && wordsResponse[10][9] != "" && wordsResponse[10][10] != "" && wordsResponse[10][12] != "" && wordsResponse[10][13] != "" && wordsResponse[10][14] != "" && wordsResponse[10][15] != "") {
        score++;
        answer16.classList.add("right");
    } else {
        answer16.classList.remove("right");
    }

    //tip 17
    if (wordsResponse[1][12] != "" && wordsResponse[1][13] != "" && wordsResponse[1][14] != "" && wordsResponse[1][15] != "" && wordsResponse[1][16] != "" && wordsResponse[1][17] != "" && wordsResponse[1][18] != "") {
        score++;
        answer17.classList.add("right");
    } else {
        answer17.classList.remove("right");
    }

    //tip 18
    if (wordsResponse[6][3] != "" && wordsResponse[6][4] != "" && wordsResponse[6][5] != "" && wordsResponse[6][6] != "" && wordsResponse[6][7] != "") {
        score++;
        answer18.classList.add("right");
    } else {
        answer18.classList.remove("right");
    }

    if (score == 18) {
        finalTextContainer.classList.add("active");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("disabled", true);
        }
    }
}

function generateCrossword() {
    for (let line = 0; line < words.length; line++) {
        for (let column = 0; column < words[line].length; column++) {
            if (words[line][column] == "-") {
                crossword.innerHTML += `<input disabled class="hyphen-input" value="-">`;
            } else if (words[line][column].substring(1) == "." || words[line][column].substring(2) == ".") {
                crossword.innerHTML += `<input disabled class="empty-input" value="${words[line][column]}">`;
            } else if (words[line][column] == "") {
                crossword.innerHTML += `<input disabled class="empty-input">`;
            } else {
                crossword.innerHTML += `<input maxlength="1" oninput="checkInput(this), validateWord()" data-letter="${words[line][column]}" data-line="${line}" data-column="${column}">`;
            }
        }
        crossword.innerHTML += "<br>";
    }
}

function resetCrossword() {
    crossword.innerHTML = "";

    wordsResponse = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];

    for (let i = 0; i < answer.length; i++) {
        answer[i].classList.remove("right");
    }

    generateCrossword();
    finalTextContainer.classList.remove("active");
}

resetBtn.addEventListener("click", resetCrossword);

window.addEventListener("load", () => generateCrossword());