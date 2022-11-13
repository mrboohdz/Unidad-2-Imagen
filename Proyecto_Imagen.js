//Se declaran las variables que utilizaremos para la imagen y las imágenes de los botones.
let carga, on, off, dl;
let btnR, btnG, btnB, btnSave;
let banR, banG, banB;

//Función donde se asignan y cargan las imágenes antes de set up.
function preload() {
  //Se carga la imagen que utilizaremos para modificar.
  carga = loadImage("assets/AOT.jpeg");
  //Se cargan las imágenes de apagado, encendido y para descargar la imagen.
  on = loadImage("assets/on.png");
  off = loadImage("assets/off.png");
  dl = loadImage("assets/download.png");
  //Se inicializa con falso.
  banR = false;
  banG = false;
  banB = false;
}

/*
  Función que se llama cuando la aplicación ya se ejecute que modifica el cursor, 
  el tamaño del lienzo dependiendo del tamaño de la imagen,
  se muestran las imágenes previamente cargadas y
  se instancian los botones para cada una de las acciones.  
*/
function setup() {
  //Se utiliza la función para no visualizar el mouse.
  noCursor();
  //Se sustituye por la vista de un pincel. Archivo extraido de los assets.
  cursor("assets/brush.png", 20, -10);
  textSize(4);
  //Se evalúa la altura de la imagen para poder crear un lienzo adecuado.
  if (carga.height < 450){
    createCanvas(carga.width+175, 450);
  }else{
    createCanvas(carga.width+175, carga.height);
  }
  //Muestra las imágenes previamente cargadas.
  image(carga, 0, 0);
  //Las posiciones son en referencia a nuestra imagen principal(carga).
  image(on, carga.width+25, 25);
  image(on, carga.width+25, 103);
  image(on, carga.width+25, 181);
  image(dl, carga.width+25, 250);
  //Se instancia cada uno de los botones con su respectiva posición.
  btnR = new Button(carga.width+25, 25, " ");
  btnG = new Button(carga.width+25, 103, " ");
  btnB = new Button(carga.width+25, 181, " ");
  btnSave = new ButtonSave(carga.width+25, 250, " ");
}


function draw() {
  /*
    Se muestra cada uno de los botones con su respectivo texto.
    Cada uno de ellos tiene el posicionamiento adelante de su botón correspondiente.
  */
  text("ROJO", carga.width+on.width+30, 50);
  text("VERDE", carga.width+on.width+30, 123);
  text("AZUL", carga.width+on.width+30, 206);
  //Se visualiza cada uno de los botones.
  btnR.display();
  btnG.display();
  btnB.display();
  btnSave.display();
}

/*
  Función que se ejecuta cuando el mouse está presionado, 
  cambia la imagen dependiendo del valor de su bandera.
*/
function mousePressed(){
  //Se evalúa si se encuentra sobre el objeto.
  if(btnR.overMe()){
    //Evalúa el valor de su bandera.
    if(!banR){
      //Cambia la imagen por la de apagado.
      image(off, carga.width+25, 25);
    }else{
      //Cambia la imagen por la de encendido.
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

//Clase para los botones de cada canala de color.
class Button {
  //Se define el constructor de la clase.
  constructor(x=0,y=0,caption="Button"){
    this.x = x;
    this.y = y;
    this.alto = 53;
    this.ancho = 100;
    this.caption = caption;
  }
  // Método para mostrar en la pantalla.
  display(){
    noFill();
    rect(this.x,this.y,this.ancho, this.alto);
    text(this.caption, this.x+25,this.y+50);
  }
  //Método para poder saber si se encuentra el mouse sobre el objeto.
  overMe(){
    if(this.x<mouseX && mouseX<this.x+this.size && this.y<mouseY && mouseY<this.y+this.size)
    {
      return true;
    }
  }
}

//Clase para el botón de descargar.
class ButtonSave {
  //Se define su constructor.
  constructor(x=0,y=0,caption="Button"){
    this.x = x;
    this.y = y;
    this.tam = 125;
    this.caption = caption;
  }
  // Método para mostrar en la pantalla.
  display(){
    noFill();
    rect(this.x,this.y,this.tam);
    text(this.caption, this.x+25,this.y+50);
  }
  //Método para poder saber si se encuentra el mouse sobre el objeto.
  overMe(){
    if(this.x<mouseX && mouseX<this.x+this.size && this.y<mouseY && mouseY<this.y+this.size)
    {
      return true;
    }
  }
}
