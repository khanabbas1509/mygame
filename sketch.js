const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var GREENTEAM,BLUETEAM,YELLOWTEAM,REDTEAM;
var player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,
player16;
function preload(){

}
function setup(){
	engine = Engine.create();
    world = engine.world;


	player1 = new GreenPlayer(200,200,10,10);
	player2 = new GreenPlayer(200,200,10,10);
	player3 = new GreenPlayer(200,200,10,10);
	player4 = new GreenPlayer(200,200,10,10);
	player5 = new RedPlayer(200,200,10,10);
	player6 = new  RedPlayer(200,200,10,10);
	player7 = new  RedPlayer(200,200,10,10);
	player8 = new  RedPlayer(200,200,10,10);
	player9 = new YellowPlayer(200,200,10,10);
	player10 = new YellowPlayer(200,200,10,10);
	player11 = new Yellowlayer(200,200,10,10);
	player12 = new YellowPlayer(200,200,10,10);
	player13 = new BluePlayer(200,200,10,10);
	player14 = new BluePlayer(200,200,10,10);
	player15 = new BluePlayer(200,200,10,10);
	player16 = new BluePlayer(200,200,10,10);

}

function draw(){
 drawSprites();

 player1.display();
 player2.display();
 player3.display();
 player4.display();
 player4.display();
 player5.display();
 player6.display();
 player6.display();
 player7.display();
 player8.display();
 player9.display();
 player10.display();
 player11.display();
 player12.display();
 player13.display();
 player14.display();
 player15.display();
 player16.display();
}
