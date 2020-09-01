const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var drop=[];
var maxdrops=100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
   
    umbrella=new Umbrella(200,300);
    

    for(var i=0;i<maxdrops;i++){
        drop.push(new Drop(random(0,400),random(0,400)));
    }    
}

function draw(){
   background(255);
   Engine.update(engine);

    umbrella.display();

    for(var i=0;i<maxdrops;i++){
        drop[i].display();
    }
    if(frameCount % 40===0){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400), y:random(0,400)});
        }
        }
    drawSprites();
}   

