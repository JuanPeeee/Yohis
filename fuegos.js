let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 0, 0, 50); // Fondo oscuro con algo de transparencia para no sobrecargar

  // Generamos partículas de manera aleatoria
  if (frameCount % 2 == 0) { // Generamos una nueva "explosión" de partículas cada dos frames
    for (let i = 0; i < 10; i++) {  // Crear varias partículas por explosión
      particles.push(new Firework(random(width), random(height)));
    }
  }

  // Dibujar y actualizar todas las partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    
    // Eliminar las partículas que se desvanecen completamente
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

// Clase para las partículas de fuego artificial
class Firework {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5), random(-5, 5)); // Velocidad aleatoria
    this.acc = createVector(0, 0); // No aplicamos gravedad por ahora
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
    this.size = random(5, 10);  // Tamaño aleatorio de la partícula
    this.alpha = 255;  // Transparencia de la partícula
  }

  // Actualiza el movimiento de la partícula
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); // No aceleramos más

    // Reducir la opacidad (simula el desvanecimiento de las partículas)
    this.alpha -= 4;
  }

  // Dibuja la partícula
  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
