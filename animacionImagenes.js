document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todas las imágenes
    let images = document.querySelectorAll('.image-container');
    let imageIndex = 0;
  
    // Función que anima las imágenes (aparecen y caen)
    function animateImages() {
      if (imageIndex < images.length) {
        let image = images[imageIndex];
        
        // Activar animación
        image.style.opacity = 1; // Mostrar la imagen
        image.style.transform = 'translateY(0) scale(1)'; // Hacer que caiga y crezca
  
        // Aumentar el índice para la siguiente imagen
        imageIndex++;
      }
  
      // Continuar animando las imágenes
      if (imageIndex < images.length) {
        requestAnimationFrame(animateImages);
      }
    }
  
    // Iniciar la animación cuando la página se haya cargado
    animateImages();
  });
  