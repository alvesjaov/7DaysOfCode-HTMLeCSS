/* Esse arquivo foi criado para manipular o menu responsivo */

const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-lateral img')

menuIcon.addEventListener('click', function () {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
})

