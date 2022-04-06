var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
let gameOver = document.getElementById("game-over");
var animation_speed=1;
var test ;
let gameovervoice = new Audio();
gameovervoice.src = 'gameover1.wav';

let jumpsound = new Audio();
jumpsound.src = 'jumpsound.mp3';
document.addEventListener('click', function(){
    jumpsound.play();
})

//intit animation speed

//game over sound effect
let gameoversound = new Audio();
gameoversound.src = 'gameover.wav';

let blocksound = new Audio();
blocksound.src = 'blocksoundlong.wav';
document.addEventListener('animationstart', function(){
    blocksound.play();
    blocksound.loop = true;
    })

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

//function blockSpeed(){
   // if(score >= 10)
//}

/* checking location of character in relation to 
block to see if the player has lost */

var checkDead = setInterval(function(){
    var characterTop =  
        parseInt(window.getComputedStyle(character). getPropertyValue("top"));   
    var blockLeft =    
        parseInt(window.getComputedStyle(block). getPropertyValue("left"));
        document.getElementById("block").style.animation = 'block '+animation_speed+'s linear'; 

    if(blockLeft<20 && blockLeft>0 && characterTop>=160){ 
        blocksound.pause;
        blocksound.src = "";
        blocksound.loop = false;
        jumpsound.src = "";
        gameoversound.play();
        block.style.animation = "none";
        block.style.display = "none";
        character.style.display = "none";
        game.style.display = "none";
        document.getElementById("scoreDisplaySpan").innerHTML = +Math.floor(score/100);
        gameOver.style.display = "block";
        score = 0;
        gameoversound.play();
        gameovervoice.play();
    }else{
        score++;
        if(animation_count=Math.floor(Math.floor(score/100 % 10))== 5) {
           animation_speed = animation_speed +0.1
           console.log("block"+animation_speed+"s linear");
        
        }
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
        console.log(animation_speed);
}
},10);

