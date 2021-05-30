alert("Hello! This is a demo Dice Game. It is designed for 15.6 inch laptop");
let InScr1 = document.querySelector(".sc-1");
let InScr2 = document.querySelector(".sc-2");
let dice = document.querySelector(".di");
let count1 = document.querySelector(".coun1");
let count2 = document.querySelector(".coun2");
let nosc = 0;
let nply1 = document.querySelector(".player-1");
let nply2 = document.querySelector(".player-2");
let winner = document.querySelector(".win");


const sco = [0, 0];
let playee = 1;

let play = true;

InScr1.textContent = 0;
InScr2.textContent = 0;
count1.textContent = 0;
count2.textContent = 0;

dice.classList.add("hidden");

function chn(){

    document.querySelector(`.sc-${playee}`).textContent = 0;
    playee = playee == 1 ? 2 : 1;
    nosc = 0;
    nply2.classList.toggle("act");
    nply1.classList.toggle("act");
}

function roll(){
    if(play){
  let  nmb = Math.trunc(Math.random()*6) +1;
    dice.src = `d-${nmb}.jpg`;
    dice.classList.remove("hidden");

    if(nmb !==1){
        nosc += nmb;
        document.querySelector(`.sc-${playee}`).textContent = nosc;
    }
    else{
        chn()
    }
}
    
}

function hold(){
    if(play){
    sco[playee - 1] += nosc;
    document.querySelector(`.coun${playee}`).textContent = sco[playee - 1];

    if(sco[playee - 1] >= 50){
        play = false;
        winner.textContent = `Player ${playee} has WON the Game`;
    }
    else{
        chn();
    }
}
}

function reset(){
    play = true;
    nosc = 0;
    winner.textContent = `Game is going on!`;
    playee = 1;
    dice.classList.add("hidden");
    InScr1.textContent = 0;
InScr2.textContent = 0;
count1.textContent = 0;
count2.textContent = 0;

sc = [0, 0];
nply1.classList.remove("act");
nply2.classList.add("act");


}