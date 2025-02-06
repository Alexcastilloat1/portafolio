// script.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleLangBtn = document.getElementById('toggle-lang');
  const cvEs = document.getElementById('cv-es');
  const cvEn = document.getElementById('cv-en');

  toggleLangBtn.addEventListener('click', () => {
    // Si CV en Español está visible, lo ocultamos y mostramos el Inglés
    if (cvEs.style.display !== 'none') {
      cvEs.style.display = 'none';
      cvEn.style.display = 'block';
      toggleLangBtn.textContent = 'Ver CV en Español';
    } else {
      // Caso contrario
      cvEs.style.display = 'block';
      cvEn.style.display = 'none';
      toggleLangBtn.textContent = 'Ver CV en Inglés';
    }
  });
});

