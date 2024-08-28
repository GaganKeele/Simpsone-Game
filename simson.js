let start= false;
let level=0;

let user=[];
let game=[];
let h2=document.querySelector('h2');
let color=["yellow","purple","orange","red"];

// start the game
document.addEventListener('keydown', function(){
if(start==false){
    start=true;
    levelup();
}   
});

// function to flash the button
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
         btn.classList.remove("flash");
     }, 250);
}

// function to change color when user click the button
function userclick(btn){
    btn.classList.add("userpress");
    setTimeout(function () {
         btn.classList.remove("userpress");
     }, 200);
}

// function fot when game over to chnage the color
function gameover(body){
    body=document.querySelector("body");
    body.classList.add("over");
    setTimeout(function () {
         body.classList.remove("over");
     }, 250);
}

// function for level up
function levelup(){
    user=[];
    level++;
    
    h2.innerText=`level ${level}`;

    let col=Math.floor(Math.random()*3);
    let randcol=color[col];
    let rand_col_idx=document.querySelector(`.${randcol}`);
    // btnflash(rand_col_idx);
    game.push(randcol);
    btnflash(rand_col_idx);
}

// function for  to check the answer
function checkans(idx){
    if(user[idx]===game[idx]){
        if(user.length==game.length){
            setTimeout(levelup,500);
           }
}
    else{
        h2.innerHTML=`Game over..!<br>Your Score is ${level} <br>Press any key to strat`;
    reset();
    gameover();
    document.querySelector("body").style.color="white";
    setTimeout(function(){
        document.querySelector("body").style.color="black";
    },250)


    }
}

// function for take the user selecter botton and load the value to the user 
// array
function btnpress(){
    let btn=this;
    userclick(btn);
   usercolor=btn.getAttribute("id")
  
    user.push(usercolor)
    console.log(user);
    checkans(user.length-1);     
}

// this for to select the single nutton whta user choose in the four buttons  

let allbtn=document.querySelectorAll(".btn");
for (btn of allbtn){
   btn.addEventListener("click", btnpress);
}

// function to reset

function reset(){
    user=[];
    start=false;
    game=[];
    level=0
}