//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
dog=loadSound("images/dogImg.png");
happyDog=loadSound("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  foodStock=database.ref('Food');
  foodStock.on('value',readStock);
 dog=createSprite(100,200,20,20);

 happyDog=createSprite(100,200,20,20);
}


function draw() {  
background(46, 139, 87);
 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
drawSprites();

text("Note:Press UP_ARROW Key to feed dog milk!",10,200);
text("Food Remaining:"+foodStock, 50,200);
  //add styles here

  textSize(20);
  fill("white");
  stroke("purple");


  
}

 function readStock(data){
   foodS=data.val();
 }

 function writeStock(x) {

  if(x<-0) {
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
 }



