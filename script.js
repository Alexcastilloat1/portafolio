// script.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleLangBtn = document.getElementById('toggle-lang');
  const portfolioEs = document.getElementById('portfolio-es');
  const portfolioEn = document.getElementById('portfolio-en');

  toggleLangBtn.addEventListener('click', () => {
    // Si la sección en Español está visible, la ocultamos y mostramos la de Inglés
    if (portfolioEs.style.display !== 'none') {
      portfolioEs.style.display = 'none';
      portfolioEn.style.display = 'block';
      toggleLangBtn.textContent = 'Ver Portafolio en Español';
    } else {
      // Caso contrario
      portfolioEs.style.display = 'block';
      portfolioEn.style.display = 'none';
      toggleLangBtn.textContent = 'Ver Portafolio en Inglés';
    }
  });
});
