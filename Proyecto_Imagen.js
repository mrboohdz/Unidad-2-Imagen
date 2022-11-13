let carga, on, off, dl;
let btnR, btnG, btnB, btnSave;
let banR, banG, banB;

function preload() {
  carga = loadImage("assets/AOT.jpeg");
  //carga = loadImage("https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a9d4c1493f80703fe86dd83fb3b37623.jpeg","jpeg");
  on = loadImage("assets/on.png");
  off = loadImage("assets/off.png");
  dl = loadImage("assets/download.png");
  banR = false;
  banG = false;
  banB = false;
}

function setup() {
  noCursor();
  cursor("assets/brush.png", 20, -10);
  textSize(4);
  if (carga.height < 450){
    createCanvas(carga.width+175, 450);
  }else{
    createCanvas(carga.width+175, carga.height);
  }
  
  image(carga, 0, 0);
  image(on, carga.width+25, 25);
  image(on, carga.width+25, 103);
  image(on, carga.width+25, 181);
  image(dl, carga.width+25, 250);
  btnR = new Button(carga.width+25, 25, " ");
  btnG = new Button(carga.width+25, 103, " ");
  btnB = new Button(carga.width+25, 181, " ");
  btnSave = new ButtonSave(carga.width+25, 250, " ");
}


function draw() {
  text("ROJO", carga.width+on.width+30, 50);
  text("VERDE", carga.width+on.width+30, 123);
  text("AZUL", carga.width+on.width+30, 206);
  btnR.display();
  btnG.display();
  btnB.display();
  btnSave.display();
}

function mousePressed(){
  
  if(btnR.overMe()){
    if(!banR){
      image(off, carga.width+25, 25);
    }else{
      image(on, carga.width+25, 25);
    }
  }
    
  if(btnG.overMe()){
    if(!banG){
      image(off, carga.width+25, 103);
    }else{
      image(on, carga.width+25, 103);
    }
  }
  
  if(btnB.overMe()){
    if(!banB){
      image(off, carga.width+25, 181);
    }else{
      image(on, carga.width+25, 181);
    }
  }
}

class Button {
  constructor(x=0,y=0,caption="Button"){
    this.x = x;
    this.y = y;
    this.alto = 53;
    this.ancho = 100;
    this.caption = caption;
  }
  display(){
    noFill();
    rect(this.x,this.y,this.ancho, this.alto);
    text(this.caption, this.x+25,this.y+50);
  }
  overMe(){
    if(this.x<mouseX && mouseX<this.x+this.size && this.y<mouseY && mouseY<this.y+this.size)
    {
      return true;
    }
  }
}
class ButtonSave {
  constructor(x=0,y=0,caption="Button"){
    this.x = x;
    this.y = y;
    this.tam = 125;
    this.caption = caption;
  }
  display(){
    noFill();
    rect(this.x,this.y,this.tam);
    text(this.caption, this.x+25,this.y+50);
  }
  overMe(){
    if(this.x<mouseX && mouseX<this.x+this.size && this.y<mouseY && mouseY<this.y+this.size)
    {
      return true;
    }
  }
}
