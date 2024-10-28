let font , img ;
let imgState = false;
let imgX, imgY;
let imgAlpha = 0;
let snowX = [ ], snowY = [ ];

function preload() {
  img = loadImage ("download.jpg");
  font = loadFont ("方正字迹-邱氏粗瘦金书简体.TTF");
}


function setup() {
 createCanvas(600, 800);
 textFont(font);
 angleMode(DEGREES); 

//snow
 for(let i=0;i<100;i++){            
    snowX [i] = random(width);
    snowY [i] = random(height);
 }
}

function draw() {
  background(0);

//circle
  fill(220,140,50);                   
  ellipse(width/2, height/2, 600);
 
//building
  building();                          

//title
  textSize(100);                        
  textAlign(CENTER, CENTER);
  fill(144, 174, 193);
  noStroke();
  text("寻找无双", width/2, 100);

//girl silhoutte
  imageMode(CENTER);

  if(imgState){                     
  tint(255, imgAlpha);
  image(img, imgX, imgY);
  if(imgAlpha > 0) {                   
    imgAlpha -= 3;
    }
  }

 //snow
  fill(255,200);                        
  noStroke();

  for(let i=0;i<100;i++){
  ellipse(snowX[i], snowY[i], 5);
  snowY[i] += 2;
   if(snowY[i] > height){
    snowY[i] = 0;
   }
  }
}

function building(){

 fill(94, 98, 99);
 strokeWeight(3);
 stroke(180);

//roof
 fill(144, 174, 193)
 quad(0, 250, 150, 250, 200, 350, 0, 350);
 quad(0, 400, 150, 400, 250, 500, 0, 500);

//body
 fill(173, 63, 32);
 rect(0, 350, 150, 50);

 fill(95, 62, 43)
 rect(0, 500, 200, 300);

//window line
 strokeWeight(6)
 fill(182, 103, 80)
 stroke(0, 150);
 for(let x = 0; x < 200; x += 40){ 
  line(x, 505, x, height - 5);
 }
  line(3, 560, 195, 560);

//roof lines
 fill(59, 84, 99)
 stroke(180,150)
 for(let x = 0; x < 150; x += 10){ 
  line(x, 250, x/0.75, 350);
  line(x, 400, x/0.6, 500);
 }
}


function mousePressed(){
  if(random(10) < 4) {
    imgState = true;
    // imgX=random(width)
    // imgY=random(height)
    let rad = random(240);
    let angle = random(360);
imgX = cos(angle) * rad + width/2;
imgY = sin(angle) * rad + height/2;
    imgAlpha = 255;
  }
}