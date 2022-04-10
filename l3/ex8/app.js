document.addEventListener('DOMContentLoaded',game)

function getWalkSpeed(){
    return Math.floor(Math.random()*(-25)+30);
}
function getBottomPosition(){
    return Math.floor(Math.random()*(150)+10);   
}
function getZombieScale(){
    return 0.5 + Math.random() * 0.7
}

function game(){
{
    let gameScoreValue = 0;
    let gameScore = document.querySelector('.score span');
    let gameBoard = document.querySelector('.board');
    let zombiesLeft = 3;

    let zombieLeftChecker = setInterval(function(){
        if(zombiesLeft===0){
            let zombies = document.querySelectorAll('.zombie')
            gameScore.innerHTML="YOU LOST! <br> SCORE:"+gameScoreValue;
            gameScore.style.fontSize="10rem";
            document.querySelector('.score').style.textAlign="center";
            for(let z of zombies){
                z.remove();
            }
        }
    },10)

    let zombieSpawner = setInterval(function () {
        if(zombiesLeft>0){
            let zombie = document.createElement('div');
            zombie.classList.add('zombie');

            let bottomPos = getBottomPosition();
            zombie.style.bottom = bottomPos + 'px';
            zombie.style.zIndex = 360 - bottomPos;

            let scale = getZombieScale();
            zombie.style.transform = "scale("+scale+")";

            let anim = "1s,"+getWalkSpeed()+"s"
            zombie.style.animationDuration = anim;

            zombie.live = 2;
            gameBoard.appendChild(zombie);

            zombie.addEventListener('animationend', function(e) {
                if(e.animationName === "zombieWalk") {
                    zombiesLeft -= 1;
                    this.remove();
                }
            });
        }
    }, 2000);


    gameBoard.addEventListener('click', function(e) {
        if (e.target.classList.contains ('zombie')) {
            e.target.live--;
            if(e.target.live <= 0 ) {
                gameScoreValue += 12;
                e.target.remove();
            }
        }else{
            gameScoreValue -= 6;
            if(gameScoreValue <0){
                gameScoreValue = 0;
            }
        }
        gameScore.innerText = gameScoreValue;
    });

}
}