/* ======================================
   HOGWARTS ARCHIVE
====================================== */

const screens=document.querySelectorAll(".screen");

function showScreen(id){

  screens.forEach(screen=>{
    screen.classList.remove("active");
  });

  document
    .getElementById(id)
    .classList.add("active");

  window.scrollTo(0,0);

}

/* ---------- ENTER ARCHIVE ---------- */

document
.getElementById("enterArchive")
.addEventListener("click",()=>{

    showScreen("homeScreen");

});

/* ---------- BEGIN EXAM ---------- */

document
.getElementById("beginExam")
.addEventListener("click",()=>{

    showScreen("modeScreen");

});

/* ---------- MODE CARDS ---------- */

document
.querySelectorAll(".mode-card")
.forEach(card=>{

    card.addEventListener("click",()=>{

        const mode=card.dataset.mode;

        alert(`${mode} selected.\n\nNext we'll load the randomized question engine.`);

    });

});
