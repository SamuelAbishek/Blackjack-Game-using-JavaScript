let msg="";

let ss=0;

let isAlive=true;
let isBlackJake=false;

let arr=[];

let player={
	name:"Samuel",
	chips:200
};


let dis=document.querySelector(".res");
let d=document.getElementById("msg");
let s = document.querySelector("#sum");
let cards=document.querySelector("#cards-el");
let new_card_drawn=document.querySelector("#new-card");
let lasted_till=document.querySelector("#lasted");
let player_details=document.querySelector("#player-det");
let new_game_reset=document.querySelector("#new-game");
let start_btn=document.querySelector("#btn-1");

function startGame(){
	if(isAlive && !isBlackJake){
		renderGame();
		player_details.textContent=player.name+": $"+player.chips;
		start_btn.disabled=true;
	}
}

function renderGame(){
	
	let ran_num=randomNumber();
	ss+=ran_num;
	arr.push(ran_num);
	if(ss<21){
	msg="You are still in a game and do u wanna to draw a card ?  😚";
	dis.textContent=msg;
	d.textContent=msg;
	}
	else if(ss===21){
		msg="You got the Black Jake !!!!!!! 💥";
		dis.textContent=msg;
		d.textContent=msg;
		isBlackJake=true;
		new_game_reset.innerHTML=
			'<button onclick="resetGame()">New Game</button>';

	}
	else{
		msg="Your are out of the game....  🙃";
		dis.textContent=msg;
		d.textContent=msg;
		lasted_till.textContent="You are out after "+arr.length+" drawns of cards";
		isAlive=false;
		new_game_reset.innerHTML=
			'<button onclick="resetGame()">New Game</button>';
	}

	s.textContent=ss;
	new_card_drawn.textContent="Drawn Card is: "+ran_num;
	cards.textContent="Cards: "+arr;
}

function newCard(){
	if(isAlive && !isBlackJake){
		renderGame();
	}
}

function resetGame(){
	ss=0;
	arr=[];

	isAlive=true;
	isBlackJake=false;	

	d.textContent="Start the Game";
	s.textContent="";
	cards.textContent="Cards: ";
	lasted_till.textContent="";
	new_card_drawn.textContent="";
	player_details.textContent="";
	dis.textContent="";
	new_game_reset.innerHTML='';
	start_btn.disabled=false;
}

function randomNumber(){
	let num=Math.floor((Math.random()*13)) + 1;
	if(num === 1){
		return 11;
	}
	else if(num >= 11){
		return 10;
	}
	return num;
}
