/*const revealText = document.getElementById('reveal-text');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;


    revealText.style.clipPath = `circle(100px at ${mouseX}px ${mouseY}px)`;
}); */

let lastScrollY = window.scrollY;
const header = document.getElementById('header');
let timeout;

/*window.addEventListener('scroll', () => {

    if (window.scrollY <= header.offsetHeight) {
        timeout = setTimeout(() => {
            header.classList.remove('hiddenHeader'); // Muestra el header después de la inactividad
        }, 500);
        return; // Salir de la función para no aplicar otras lógicas
    }

    if (window.scrollY > lastScrollY) {
        // Scroll hacia abajo: Esconde el header
        header.classList.add('hiddenHeader');
    } else {
        // Scroll hacia arriba: Muestra el header
        header.classList.add('hiddenHeader');
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        header.classList.remove('hiddenHeader'); // Muestra el header después de la inactividad
    }, 2000);

    lastScrollY = window.scrollY; // Actualiza la posición del scroll
}); */


window.addEventListener('scroll', function() {
    var text = document.getElementById('disappearingText');
    var scrollPosition = window.scrollY;
    var threshold = 200; // La altura a partir de la cual el texto desaparece

    if (scrollPosition > threshold) {
        text.classList.add('hiddenText'); // El texto desaparece
    } else {
        text.classList.remove('hiddenText'); // El texto vuelve a aparecer
    }
});

/*window.addEventListener('scroll', function() {
    var text = document.getElementById('disappearingTitle');
    var scrollPosition = window.scrollY;
    var threshold = 300; // La altura a partir de la cual el texto desaparece

    if (scrollPosition > threshold) {
        text.classList.add('moveText'); // El texto desaparece
    } else {
        text.classList.remove('moveText'); // El texto vuelve a aparecer
    }
});*/

window.addEventListener('scroll', function() {
    var text = document.getElementById('disappearingTitle');
    var scrollPosition = window.scrollY;
    var threshold = 400; // La altura a partir de la cual el texto desaparece

    if (scrollPosition > threshold) {
        text.classList.add('hiddenText'); // El texto desaparece
    } else {
        text.classList.remove('hiddenText'); // El texto vuelve a aparecer
    }
});


/*window.addEventListener('scroll', function() {
    var button = document.getElementById('button1'); // O el botón que desees agrandar
    var scrollPosition = window.scrollY;
    var threshold = 150; // La altura a partir de la cual el botón se agranda

    if (scrollPosition > threshold) {
        button.classList.add('enlargeButton'); // Agranda y mueve el botón
    } else {
        button.classList.remove('enlargeButton'); // Vuelve a su tamaño y posición original
    }
});*/


const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 7;
        const y = (e.clientY - top - height / 2) / 7;

        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});



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


window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel0');
    var scrollPosition = window.scrollY;
    var threshold = 2400; // La altura a partir de la cual el texto desaparece

    if (scrollPosition > threshold) {
        text.classList.add('hiddenText'); // El texto desaparece
    } else {
        text.classList.remove('hiddenText'); // El texto vuelve a aparecer
    }
});

window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel1'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 2400; // La altura a partir de la cual el texto aparece
    var thresholdEnd = 2600;

    if (scrollPosition >  thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});

window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel2'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 2600; 
    var thresholdEnd = 2800;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});


window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel3'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 2800; 
    var thresholdEnd = 3000;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});


window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel4'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 3000; 
    var thresholdEnd = 3200;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});

window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel5'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 3200; 
    var thresholdEnd = 3400;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});

window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel6'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 3400; 
    var thresholdEnd = 3600;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});

window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel7'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart =3600; 
    var thresholdEnd = 3800;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});


window.addEventListener('scroll', function() {
    var text = document.getElementById('nivel8'); // Cambia a tu elemento objetivo
    var scrollPosition = window.scrollY;
    var thresholdStart = 3800; 
    var thresholdEnd = 8000;

    if (scrollPosition > thresholdStart && scrollPosition < thresholdEnd) {
        text.classList.remove('hiddenText'); // El texto aparece
    } else {
        text.classList.add('hiddenText'); // El texto permanece oculto
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const rellaxElements = document.querySelectorAll('.circle');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('rellax'); // Agrega la clase cuando el elemento entra en pantalla
                new Rellax(entry.target, {
                    speed: entry.target.dataset.rellaxSpeed || -2, // Velocidad personalizada
                });
                observer.unobserve(entry.target); // Deja de observar para evitar reinicializaciones
            }
        });
    }, { threshold: 0.05 }); // Se activa cuando el 5% del elemento es visible

    // Observa cada elemento con la clase circle
    rellaxElements.forEach((el) => observer.observe(el));
});

var rellax = new Rellax('.rellax');



document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#header h1');
    const sections = document.querySelectorAll('section');

    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Cambia el color del header basado en el ID o dataset de la sección
                switch (entry.target.id) {
                    case 'section1':
                        header.style.color = 'white';
                        break;
                    case 'section2':
                        header.style.color = 'black';
                        break;
                    case 'section3':
                        header.style.color = 'white';
                        break;
                        case 'section4':
                        header.style.color = 'black';
                        break;
                    default:
                        header.style.color = 'white';
                }
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

    // Observa todas las secciones
    sections.forEach((section) => observer.observe(section));
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


/*document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    const niveles = document.querySelectorAll('.niveles');
    const nivelActual = document.getElementById('nivelActual');
    const textoActual = document.getElementById('textoActual');

niveles.forEach((nivel, index) => {
    ScrollTrigger.create({
        trigger: nivel,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            const nuevoNivel = nivel.getAttribute('data-nivel');
            const nuevoTexto = nivel.getAttribute('data-texto');
            nivelActual.textContent = nuevoNivel;
            textoActual.textContent = nuevoTexto;
        },
    });
});
});
*/


