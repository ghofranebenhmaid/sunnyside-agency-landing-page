const btnHamburbger = document.querySelector('#btnHamburbger');
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.mobileMenu');

  btnHamburbger.addEventListener('click', () => {
    console.log(' click ');
    if (header.classList.contains('open')) {
      header.classList.remove('open');
      mobileMenu.classList.remove('fade-in');
      mobileMenu.classList.add('fade-out');    

    } else {
      header.classList.add('open');    
      mobileMenu.classList.add('fade-in');    
      mobileMenu.classList.remove('fade-out');    
    }
  });