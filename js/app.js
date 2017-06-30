var scores, round, activePlayer, game;

init();

function init() {
  scores=[0,0]
  round=0;
  activePlayer=0;
  game=true;

  document.getElementById("class1").style.display="none";
  document.getElementById("score-0").textContent="0";
  document.getElementById("score-1").textContent="0";
  document.getElementById("current-0").textContent='0';
  document.getElementById("current-1").textContent="0";
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0').classList.remove('winner');
  document.querySelector('.player-1').classList.remove('winner');
  document.querySelector('.player-0').classList.remove('active');
  document.querySelector('.player-1').classList.remove('active');
  document.querySelector('.player-0').classList.add('active');
}

function next(){
  round=0;
  document.getElementById(`score-${activePlayer}`).textContent="0";
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(".player-0").classList.toggle("active");
  document.querySelector(".player-1").classList.toggle("active");

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener("click",init);

document.querySelector('.btn-roll').addEventListener("click",()=>{
  if(game){
  var dice = document.getElementById("class1");
  var num = Math.floor(Math.random()*6)+1;
  dice.src=`css/images/dice-${num}.png`
  dice.style.display="block";
  if(num!==1)
  {
    round+=num;
    document.getElementById(`score-${activePlayer}`).textContent=round;
  }
  else{
    next();
  }
}
});

document.querySelector('.btn-hold').addEventListener('click',()=>{
  if(game){
  document.getElementById(`score-${activePlayer}`).textContent="0";
  var val=parseInt(document.getElementById(`current-${activePlayer}`).textContent);
  val+=round;
  document.getElementById(`current-${activePlayer}`).textContent=val;
  if (val >= 25) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer).classList.add('winner');
    document.querySelector('.player-' + activePlayer).classList.remove('active');
    game = false;
  } else {
      next();
    }
}
});
