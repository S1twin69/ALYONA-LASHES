// Получаем элементы для бургер-меню
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Добавляем обработчик события на бургер-меню
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
