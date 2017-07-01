var scores, round, activePlayer, game, cache=0;

init();

function init() {
  scores=[0,0]
  round=0;
  activePlayer=0;
  game=true;

  document.getElementById("class1").style.display="none";
  document.getElementById("class2").style.display="none";
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
  round=0,cache=0;
  document.getElementById(`score-${activePlayer}`).textContent="0";
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(".player-0").classList.toggle("active");
  document.querySelector(".player-1").classList.toggle("active");

  document.querySelector('#class1').style.display = 'none';
  document.querySelector('#class2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener("click",init);

document.querySelector('.btn-roll').addEventListener("click",()=>{
  if(game){
  var dice1 = document.getElementById("class1");
  var dice2 = document.getElementById("class2");
  var num1 = Math.floor(Math.random()*6)+1;
  var num2 = Math.floor(Math.random()*6)+1;
  dice1.src=`css/images/dice-${num1}.png`
  dice2.src=`css/images/dice-${num2}.png`
  dice1.style.display="block";
  dice2.style.display="block";

  if(num1!==1 && num2!==1)
  {
    round+=num1+num2;
    console.log(num1+num2);
    console.log("Cache",cache);
    if(cache==num1+num2){
      var opp = activePlayer === 0 ? 1 :0;
      var val=parseInt(document.getElementById(`current-${opp}`).textContent);
      val-=10;
      document.getElementById(`current-${opp}`).textContent=val;
    }
    else{
      cache=num1+num2;
    }
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
  if (val >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('#class1').style.display = 'none';
    document.querySelector('#class2').style.display = 'none';
    document.querySelector('.player-' + activePlayer).classList.add('winner');
    document.querySelector('.player-' + activePlayer).classList.remove('active');
    game = false;
  } else {
      next();
    }
}
});
