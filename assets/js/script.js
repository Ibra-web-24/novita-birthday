
/* =================================
   NOVITA'S BIRTHDAY SURPRISE
================================= */

const PACAR = "Ibrahim";

const WRONG_MESSAGE =
    "hayo siapa nama pacar kmu,jawab yang benar ga boleh boong";

let visitor = "";


// PINDAH HALAMAN

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// VALIDASI NAMA PENGUNJUNG

function checkName() {

    const nameInput = document.getElementById("visitorName");
    const nameError = document.getElementById("nameError");

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent =
            "Nama kamu belum diisi nih!";

        nameInput.focus();
        return;
    }

    visitor = name;

    nameError.textContent = "";

    document.getElementById("displayName")
        .textContent = visitor;

    showScreen("quizScreen");
}


// VALIDASI JAWABAN PACAR

function checkBoyfriend() {

    const answerInput = document.getElementById("boyfriendName");
    const quizError = document.getElementById("quizError");

    const answer = answerInput.value.trim();

    if (answer === "") {

        quizError.textContent =
            "Jawab dulu pertanyaannya ya!";

        answerInput.focus();
        return;
    }

    if (answer.toLowerCase() === PACAR.toLowerCase()) {

        quizError.textContent = "";

        document.getElementById("displayName")
            .textContent = visitor;

        showScreen("successScreen");

    } else {

        quizError.textContent = WRONG_MESSAGE;

        answerInput.value = "";
        answerInput.focus();
    }
}


// MULAI ULANG TAHUN

function startBirthday() {

    showScreen("birthdayScreen");

    const music = document.getElementById("bgMusic");

    music.play().catch(() => {
        console.log("Musik belum dapat diputar.");
    });

    document.getElementById("musicBtn")
        .classList.add("playing");
}


// KONTROL MUSIK

function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {

        music.play().catch(() => {
            console.log("Musik tidak dapat diputar.");
        });

        button.textContent = "♫";
        button.classList.add("playing");

    } else {

        music.pause();

        button.textContent = "♪";
        button.classList.remove("playing");
    }
}


// ENTER UNTUK INPUT NAMA

document.getElementById("visitorName")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            checkName();
        }
    });


// ENTER UNTUK JAWABAN PACAR

document.getElementById("boyfriendName")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            checkBoyfriend();
        }
    });
