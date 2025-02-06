// script.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-resumen');
  const resumenSection = document.getElementById('resumen');

  toggleBtn.addEventListener('click', () => {
    if (resumenSection.style.display === 'none') {
      resumenSection.style.display = 'block';
    } else {
      resumenSection.style.display = 'none';
    }
  });
});
