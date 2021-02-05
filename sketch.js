//Create variables here
var dog, dogImg, dogImg1;
var foodS, foodStock;
var database;

function preload() {
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
  database = firebase.database;

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(300, 300, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.4;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {
  background(46, 139, 87);
  if (keyWentDown(Up_Arrow)) {
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  drawSprites();
  text("Food remaining : "+foodS,170,200);
   textSize(13); 
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20); }
   //Function to read values from DB 
   function readStock(data)
   {
      foodS=data.val();
     }
    //Function to write values in DB
     function writeStock(x)
     {
       if(x<=0)
       {
          x=0; 
      }
       else{ x=x-1;
     } 
     database.ref('/').update({ Food:x }) 
    }
  //add styles here





