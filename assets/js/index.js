const crossword = document.querySelector(".crossword");
const inputs = document.getElementsByTagName("input");

const subtitle = document.querySelectorAll(".subtitle");
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
        subtitle1.classList.add("right");
    } else {
        subtitle1.classList.remove("right");
    }

    //tip 2
    if (wordsResponse[6][12] != "" && wordsResponse[6][13] != "" && wordsResponse[6][14] != "") {
        score++;
        subtitle2.classList.add("right");
    } else {
        subtitle2.classList.remove("right");
    }

    //tip 3
    if (wordsResponse[13][1] != "" && wordsResponse[13][2] != "" && wordsResponse[13][3] != "" && wordsResponse[13][4] != "" && wordsResponse[13][5] != "" && wordsResponse[13][6] != "" && wordsResponse[13][7] != "" && wordsResponse[13][8] != "" && wordsResponse[13][9] != "" && wordsResponse[13][10] != "" && wordsResponse[13][11] != "" && wordsResponse[13][12] != "" && wordsResponse[13][13] != "") {
        score++;
        subtitle3.classList.add("right");
    } else {
        subtitle3.classList.remove("right");
    }

    //tip 4
    if (wordsResponse[13][1] != "" && wordsResponse[14][1] != "" && wordsResponse[15][1] != "") {
        score++;
        subtitle4.classList.add("right");
    } else {
        subtitle4.classList.remove("right");
    }

    //tip 5
    if (wordsResponse[11][11] != "" && wordsResponse[11][12] != "" && wordsResponse[11][13] != "") {
        score++;
        subtitle5.classList.add("right");
    } else {
        subtitle5.classList.remove("right");
    }

    //tip 6
    if (wordsResponse[1][15] != "" && wordsResponse[2][15] != "" && wordsResponse[3][15] != "" && wordsResponse[4][15] != "" && wordsResponse[5][15] != "") {
        score++;
        subtitle6.classList.add("right");
    } else {
        subtitle6.classList.remove("right");
    }

    //tip 7
    if (wordsResponse[8][11] != "" && wordsResponse[8][12] != "" && wordsResponse[8][13] != "" && wordsResponse[8][14] != "" && wordsResponse[8][15] != "") {
        score++;
        subtitle7.classList.add("right");
    } else {
        subtitle7.classList.remove("right");
    }

    //tip 8
    if (wordsResponse[5][4] != "" && wordsResponse[5][5] != "" && wordsResponse[5][6] != "" && wordsResponse[5][7] != "" && wordsResponse[5][8] != "" && wordsResponse[5][9] != "" && wordsResponse[5][10] != "" && wordsResponse[5][12] != "" && wordsResponse[5][13] != "" && wordsResponse[5][15] != "" && wordsResponse[5][16] != "" && wordsResponse[5][17] != "" && wordsResponse[5][18] != "" && wordsResponse[5][19] != "") {
        score++;
        subtitle8.classList.add("right");
    } else {
        subtitle8.classList.remove("right");
    }

    //tip 9
    if (wordsResponse[4][4] != "" && wordsResponse[5][4] != "" && wordsResponse[6][4] != "") {
        score++;
        subtitle9.classList.add("right");
    } else {
        subtitle9.classList.remove("right");
    }

    //tip 10
    if (wordsResponse[11][18] != "" && wordsResponse[11][19] != "") {
        score++;
        subtitle10.classList.add("right");
    } else {
        subtitle10.classList.remove("right");
    }

    //tip 11
    if (wordsResponse[7][19] != "" && wordsResponse[7][20] != "" && wordsResponse[7][21] != "" && wordsResponse[7][22] != "" && wordsResponse[7][23] != "" && wordsResponse[7][24] != "" && wordsResponse[7][25] != "" && wordsResponse[7][27] != "" && wordsResponse[7][28] != "" && wordsResponse[7][29] != "") {
        score++;
        subtitle11.classList.add("right");
    } else {
        subtitle11.classList.remove("right");
    }

    //tip 12
    if (wordsResponse[4][19] != "" && wordsResponse[5][19] != "" && wordsResponse[6][19] != "" && wordsResponse[7][19] != "" && wordsResponse[9][19] != "" && wordsResponse[10][19] != "" && wordsResponse[11][19] != "") {
        score++;
        subtitle12.classList.add("right");
    } else {
        subtitle12.classList.remove("right");
    }

    //tip 13
    if (wordsResponse[13][4] != "" && wordsResponse[14][4] != "") {
        score++;
        subtitle13.classList.add("right");
    } else {
        subtitle13.classList.remove("right");
    }

    //tip 14
    if (wordsResponse[5][9] != "" && wordsResponse[6][9] != "") {
        score++;
        subtitle14.classList.add("right");
    } else {
        subtitle14.classList.remove("right");
    }

    //tip 15
    if (wordsResponse[5][12] != "" && wordsResponse[6][12] != "" && wordsResponse[7][12] != "" && wordsResponse[8][12] != "" && wordsResponse[10][12] != "" && wordsResponse[11][12] != "" && wordsResponse[12][12] != "" && wordsResponse[13][12] != "") {
        score++;
        subtitle15.classList.add("right");
    } else {
        subtitle15.classList.remove("right");
    }

    //tip 16
    if (wordsResponse[10][7] != "" && wordsResponse[10][8] != "" && wordsResponse[10][9] != "" && wordsResponse[10][10] != "" && wordsResponse[10][12] != "" && wordsResponse[10][13] != "" && wordsResponse[10][14] != "" && wordsResponse[10][15] != "") {
        score++;
        subtitle16.classList.add("right");
    } else {
        subtitle16.classList.remove("right");
    }

    //tip 17
    if (wordsResponse[1][12] != "" && wordsResponse[1][13] != "" && wordsResponse[1][14] != "" && wordsResponse[1][15] != "" && wordsResponse[1][16] != "" && wordsResponse[1][17] != "" && wordsResponse[1][18] != "") {
        score++;
        subtitle17.classList.add("right");
    } else {
        subtitle17.classList.remove("right");
    }

    //tip 18
    if (wordsResponse[6][3] != "" && wordsResponse[6][4] != "" && wordsResponse[6][5] != "" && wordsResponse[6][6] != "" && wordsResponse[6][7] != "") {
        score++;
        subtitle18.classList.add("right");
    } else {
        subtitle18.classList.remove("right");
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

    for (let i = 0; i < subtitle.length; i++) {
        subtitle[i].classList.remove("right");
    }

    generateCrossword();
    finalTextContainer.classList.remove("active");
}

resetBtn.addEventListener("click", resetCrossword);

window.addEventListener("load", () => generateCrossword());