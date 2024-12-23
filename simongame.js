let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let highestScore=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("user_flash");
    setTimeout(function() {
        btn.classList.remove("user_flash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx) {
    if(userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    
    } else {
        if(level>highestScore){
            highestScore=level;
        }
        h2.innerHTML=`Game Over!<b> Your Score was ${level}</b> <br> <b> Highest Score: ${highestScore} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white",
             1000
       });
        reset();
       
    }
}

function btnPress() {
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let albtn=document.querySelectorAll(".btn");
for(btn of albtn) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}
