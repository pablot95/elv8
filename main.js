/*document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Bloquea el menú contextual del clic derecho
});*/



/*const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 30;
        const y = (e.clientY - top - height / 2) / 30;

        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});*/



document.addEventListener("mousemove", (e) => {
    const trailContainer = document.querySelector(".trail-container");

    // Crear un elemento para la partícula
    const trail = document.createElement("div");
    trail.className = "trail";

    // Posicionar la partícula en la posición del mouse
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Agregar la partícula al contenedor
    trailContainer.appendChild(trail);

    // Eliminar la partícula después de que la animación termine
    setTimeout(() => {
    trail.remove();
    }, 1000); // El tiempo debe coincidir con la duración de la animación
});



emailjs.init('_WA82jXCJEH8sWNSq');

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    
    const serviceID = 'service_ydz6o1p'; 
    const templateID = 'template_u110bgf'; 

    emailjs.sendForm(serviceID, templateID, this, '_WA82jXCJEH8sWNSq')
        .then(() => {
            Swal.fire({
                title: '¡Éxito!',
                text: 'Tu mensaje ha sido enviado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            this.reset();
        }, (err) => {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
});







const texts = ["Transformamos tu visión en realidad" , "Destacá en el mundo digital hoy"];
const typewriter = document.getElementById("typewriter");

let index = 0; // Índice de la palabra
let charIndex = 0; // Índice del carácter actual
let isDeleting = false; // Determina si se está borrando
let typingSpeed = 40; // Velocidad de escritura
let pauseTime = 2500; // Pausa entre palabras

function typeEffect() {
    const currentText = texts[index];
    // Determina el contenido actual
    if (isDeleting) {
        charIndex--; // Borrar caracteres
    } else {
        charIndex++; // Agregar caracteres
    }

    // Mostrar el texto en el elemento
    typewriter.textContent = currentText.substring(0, charIndex);

    // Controlar cuándo borrar o escribir
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true; // Comienza a borrar
        setTimeout(typeEffect, pauseTime); // Pausa antes de borrar
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Cambiar a escribir
        index = (index + 1) % texts.length; // Cambiar a la siguiente palabra
    }

    // Ajustar velocidad
    const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
    setTimeout(typeEffect, speed);
}

// Inicia el efecto
typeEffect();







const dynamicImage = document.getElementById('logo');

let value = 100;
let unit = "vh";

let vh = value + unit;

// Definición de umbrales y rutas de imágenes
const thresholds = [
    { limit: window.innerHeight, src: './images/Logo 2-02-02.png' },
    { limit: 3800, src: './images/Logo 1-01.png' },
    { limit: 4750, src: './images/Logo 2-02-02.png' },
    { limit: Infinity, src: './images/Logo 1-01.png' },
];


function updateThresholds() {
    if (window.innerWidth < 460) {
        thresholds[0].limit = window.innerHeight; // Cambiar el valor de ejemplo
        thresholds[1].limit = window.innerHeight * 3.8;                  // Actualizar otros valores
        thresholds[2].limit = window.innerHeight * 6.2;
        thresholds[3].limit = Infinity;
    } else {
        thresholds[0].limit = window.innerHeight;   // Valores por defecto
        thresholds[1].limit = 3800;
        thresholds[2].limit = 4750;
        thresholds[3].limit = Infinity;
    }
}

updateThresholds();

window.addEventListener('resize', updateThresholds);

thresholds[0].limit = window.innerHeight;



function updateImageOnScroll() {
    const scrollPosition = window.scrollY;

    
    for (const threshold of thresholds) {
        if (scrollPosition <= threshold.limit) {
            if (dynamicImage.src !== location.origin + threshold.src) {
                dynamicImage.src = threshold.src; 
            }
            break;
        }
    }
}

// Escucha el evento de scroll
window.addEventListener('scroll', updateImageOnScroll);