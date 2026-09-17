const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.querySelector('#contact-form');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const localidad = document.getElementById('localidad').value.trim();
    const servicio = document.getElementById('servicio').value;
    const problema = document.getElementById('problema').value.trim();

    const numeroWhatsApp = '5491166632985';

    const mensaje = `Hola, quiero hacer una consulta.%0A%0ANombre: ${encodeURIComponent(nombre)}%0ALocalidad: ${encodeURIComponent(localidad)}%0AServicio: ${encodeURIComponent(servicio)}%0AProblema: ${encodeURIComponent(problema)}`;

    window.location.href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  });
});