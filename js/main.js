let elOpenMenu = document.querySelector('.header__menu');
let elModal = document.getElementById('navbar');

elOpenMenu.addEventListener('click', function () {
    elModal.classList.toggle('show');
    elOpenMenu.classList.toggle('active');  

  });