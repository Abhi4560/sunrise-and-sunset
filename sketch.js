const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var response,j,daytime,hour;
var ampm; 

function preload() {
    
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){   
    if(backgroundImg ){
        background(backgroundImg);
        }

    Engine.update(engine);
   
    if(hour > 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);
}

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    hour =  daytime.slice(11,13);
   if(hour <= 8 && hour >= 6){
       bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
        bg = "sunrise5.png";
   }
   else if(hour <= 15 && hour >= 14){
        bg = "sunset7.png";
   }
   else if(hour <= 17 && hour >= 15){
        bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 17){
        bg = "sunset11.png";
   }
   else {
        bg = "sunset12.png";
   }
   backgroundImg = loadImage(bg);
    console.log(hour);

}