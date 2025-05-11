let flores = [];
let florIndex = 0;
let mensajeY = 80;
let mensajeOpacity = 0;
let mostrarMensaje = false;

function setup() {
  createCanvas(600, 700);
  background('#f8e1f4');
  
  const centerX = width / 2;
  const centerY = height / 2 + 100;
  const radius = 100;

  for (let angle = 0; angle < TWO_PI; angle += PI / 6) {
    const x = centerX + cos(angle) * radius;
    const y = centerY + sin(angle) * radius;
    flores.push({ x, y, size: 0, target: 30 });
  }

  flores.push({ x: centerX, y: centerY, size: 0, target: 35 });
  drawWrap();
}

function draw() {
  background('#f8e1f4');
  drawWrap();

  // Dibujar las flores
  for (let i = 0; i < flores.length; i++) {
    let flor = flores[i];

    if (i <= florIndex) {
      if (flor.size < flor.target) {
        flor.size += 1.2;
      } else {
        flor.size = flor.target;
      }
      drawFlower(flor.x, flor.y, flor.size);
    }
  }

  // Control de aparición secuencial de las flores
  if (frameCount % 10 === 0 && florIndex < flores.length - 1) {
    florIndex++;
  }

  // Activar mensaje cuando termine el ramo
  if (florIndex >= flores.length - 1) {
    mostrarMensaje = true;
  }

  // Animación de aparición del mensaje
  if (mostrarMensaje && mensajeOpacity < 255) {
    mensajeOpacity += 3;
    mensajeY -= 0.4;
  }

  // Mostrar el mensaje
  if (mostrarMensaje) {
    push();
    textAlign(CENTER);
    textSize(44);
    fill(70, 0, 100, mensajeOpacity);
    text("Feliz 11 meses, MI AMOR ❤️", width / 2, mensajeY);
    pop();
  }
}

function drawWrap() {
  fill('#2e2e2e');
  noStroke();
  triangle(200, 500, 400, 500, 300, 700);
  triangle(200, 500, 250, 450, 300, 700);
  triangle(400, 500, 350, 450, 300, 700);

  fill(255, 192, 203);
  ellipse(300, 630, 50, 30);
  ellipse(270, 620, 20, 40);
  ellipse(330, 620, 20, 40);
  rect(295, 640, 10, 30, 5);
}

function drawFlower(x, y, size) {
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(1.5);
  for (let i = 0; i < 10; i++) {
    fill('#460a40');
    ellipse(0, size, size, size * 1.5);
    rotate(PI / 5);
  }
  fill(255, 204, 0);
  circle(0, 0, size);
  pop();
}







  