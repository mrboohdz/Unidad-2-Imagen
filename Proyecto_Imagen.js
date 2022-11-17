//Hecho por
/*
•  Barrera Cardoso Ángel Camilo
•  Delgado Ramos Elizabeth
•  Hernández Márquez Nelly Mariana
•  Muñoz Ruíz Ernesto
•  Pérez Rosales Eduardo
•  Torres Chávez Nava José Miguel
*/

//Se declaran las variables que utilizaremos para la imagen y las imágenes de los botones.
let carga, alt, add, substract, dl;
let btnRa, btnGa, btnBa, btnRs, btnGs, btnBs, btnSave;
let rojo, verde, azul, c, o;

//Función donde se asignan y cargan las imágenes antes de set up.
function preload() {
  //Se carga la imagen que utilizaremos para modificar.
  carga = loadImage("assets/AOT.jpeg");
  //Se cargan las imágenes de apagado, encendido y para descargar la imagen.
  add = loadImage("assets/add.png");
  substract = loadImage("assets/substract.png");
  dl = loadImage("assets/download.png");
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
  if (carga.height < 450) {
    createCanvas(carga.width+175, 450);
  } else {
    createCanvas(carga.width+175, carga.height);
  }
  //Muestra las imágenes previamente cargadas.
  image(carga, 0, 0);
  //Se creara una imagen temporal para almacenar la imagen modificada
  alt = createImage(carga.width, carga.height);
  alt.loadPixels();
  //Las posiciones son en referencia a nuestra imagen principal(carga).
  image(add, carga.width+25, 25);
  image(add, carga.width+25, 103);
  image(add, carga.width+25, 181);
  image(substract, carga.width+75, 25);
  image(substract, carga.width+75, 103);
  image(substract, carga.width+75, 181);
  image(dl, carga.width+25, 250);
  //Se instancia cada uno de los botones con su respectiva posición.
  btnRa = new Button(carga.width+25, 25, " ");
  btnGa = new Button(carga.width+25, 103, " ");
  btnBa = new Button(carga.width+25, 181, " ");
  btnRs = new Button(carga.width+75, 25, " ");
  btnGs = new Button(carga.width+75, 103, " ");
  btnBs = new Button(carga.width+75, 181, " ");
  btnSave = new ButtonSave(carga.width+25, 250, "download.png");
}

/*Funcion para quitar cada uno de los canales de color. Recibe un valor que determina el canal a quitar*/
function quitarColor(canal) {
  //Se recorre la imagen actual pixel por pixel
  for(let i=0; i<carga.width; i++){
    for(let j=0; j<carga.height; j++){
      //Se recupera el color del pixel
      c = get(i, j);
      //Se evalua el canal a quitar
      /*1-> Rojo
      2-> Verde
      3-> Azul*/
      switch(canal){
        case 1:
          //Se asigna 0 al canal rojo
          rojo=0;
          //El resto de los canales conserva su valor actual
          verde = green(c);
          azul = blue(c);
          break;
        case 2:
         //Rojo y azul conservan el valor actual
         rojo = red(c);
         //Se asigna 0 al canal verde
         verde=0;
         azul = blue(c);
         break;
        case 3:
        //Rojo y verde conservan su valor actual
          rojo = red(c);
          verde = green(c);
          //Se asigna 0 al canal azul
          azul=0;
          break;
      }
      //Los valores de los canales se colocan en la imagen alternativa
      alt.set(i, j, color(rojo, verde, azul));
    }
  }
  //Se actualizan los pixeles de la imagen alternativa
  alt.updatePixels();
}

/*Funcion para recuperar cada uno de los canales de color. Recibe un valor que determina el canal a poner*/
function ponerColor(canal) {
  //Se recorrerá la imagen original y la alternativa pixel por pixel
  for(let i=0; i<carga.width; i++){
    for(let j=0; j<carga.height; j++){
      //Se recupera el color del pixel actual (c) y del pixel original (o)
      c = get(i, j);
      o = carga.get(i,j);
       //Se evalua el canal a recuperar
      /*1-> Rojo
      2-> Verde
      3-> Azul*/
      switch(canal){
        case 1:
          //El valor del canal rojo es el de la imagen original
          rojo=red(o);
          //El valor del resto de los canales es el de la imagen actual
          verde = green(c);
          azul = blue(c);
          break;
        case 2:
        //El valor de rojo y azul es el de la imagen actual
         rojo = red(c);
         //El valor de verde se recupera del original
         verde=green(o);
         azul = blue(c);
         break;
        case 3:
        //Los valores de rojo y verde se obtienen de la imagen actual
          rojo = red(c);
          verde = green(c);
          //El valor de azul se recupera del original
          azul=blue(o);
          break;
      }
      //Se colocan los valores originales en la imagen alternativa
      alt.set(i, j, color(rojo, verde, azul));
    }
  }
  //Se actualizan los pixeles de la imagen alternativa
  alt.updatePixels();
}

function draw() {
  /*
    Se muestra cada uno de los botones con su respectivo texto.
   Cada uno de ellos tiene el posicionamiento adelante de su botón correspondiente.
   */
  text("ROJO", carga.width+130, 50);
  text("VERDE", carga.width+130, 123);
  text("AZUL", carga.width+130, 206);
  //Se visualiza cada uno de los botones.
  btnRa.display();
  btnGa.display();
  btnBa.display();
  btnRs.display();
  btnGs.display();
  btnBs.display();
  btnSave.display();
}

//Cuando el mouse se arrastra, se colocan los pixeles de la imagen alternativa en el lienzo (imagen actual)
function mouseDragged() {
  copy(alt,mouseX,mouseY,20,20,mouseX, mouseY,20,20);  
}

/*
  Función que se ejecuta cuando el mouse está presionado,
 cambia la imagen dependiendo del valor de su bandera.
 */
function mousePressed() {
  //Se evalúa si se encuentra sobre el objeto y se manda a llamar la funcion correspondiente
  if (btnRs.overMe()) {
    quitarColor(1);
  }

  if (btnGs.overMe()) {
    quitarColor(2);
  }

  if (btnBs.overMe()) {
    quitarColor(3);
  }
  
  if (btnRa.overMe()) {
    ponerColor(1);
  }

  if (btnGa.overMe()) {
    ponerColor(2);
  }

  if (btnBa.overMe()) {
    ponerColor(3);
  }

  //Evalua si se presiona el boton para guardar la imagen
  if (btnSave.overMe()) {
    // se crea la variable donde se guardara la imagen y se le da un tamaño
    let img = createImage(carga.width, carga.height);
    //Se cargan los pixeles
    img.loadPixels();
    //Recorre la imagen, la carga y la guarda.
    for (let i = 0; i <= carga.width; i++) {
      for (let j = 0; j <= carga.height; j++) {
        img.set(i, j, get(i, j));
      }
    }
    img.updatePixels();
    img.save('imagen', 'png');
  }
}

//Clase para los botones de cada canala de color.
class Button {
  //Se define el constructor de la clase.
  constructor(x=0, y=0, caption="Button") {
    this.x = x;
    this.y = y;
    this.alto = 53;
    this.ancho = 50;
    this.caption = caption;
  }
  // Método para mostrar en la pantalla.
  display() {
    noFill();
    rect(this.x, this.y, this.ancho, this.alto);
    text(this.caption, this.x+25, this.y+50);
  }
  //Método para poder saber si se encuentra el mouse sobre el objeto.
  overMe() {
    if (this.x<mouseX && mouseX<this.x+this.ancho && this.y<mouseY && mouseY<this.y+this.alto)
    {
      return true;
    }
  }
}

//Clase para el botón de descargar.
class ButtonSave {
  //Se define su constructor.
  constructor(x=0, y=0, caption="Button") {
    this.x = x;
    this.y = y;
    this.tam = 125;
    this.caption = caption;
  }
  // Método para mostrar en la pantalla.
  display() {
    noFill();
    rect(this.x, this.y, this.tam, this.tam);
  }
  //Método para poder saber si se encuentra el mouse sobre el objeto.
  overMe() {
    if (this.x<mouseX && mouseX<this.x+this.tam && this.y<mouseY && mouseY<this.y+this.tam)
    {
      return true;
    }
  }
}
