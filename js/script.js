const toggleButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');



// Funkcja do otwierania/zamykania menu
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Kliknięcie poza menu – zamyka menu
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
    toggleButton.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Kliknięcie w link menu – zamyka menu i scrolluje płynnie
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Zamknij menu
    toggleButton.classList.remove('active');
    navMenu.classList.remove('active');

    // Płynny scroll
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: scrollowanie przycisków "odklejone" od menu (np. w mobile)
navMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});