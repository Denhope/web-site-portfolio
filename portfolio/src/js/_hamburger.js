export function burger () {
  const menuHamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__navigation');
  const menuLinks = menu.querySelectorAll('.navigation__link');
  const modal = document.querySelector('.popup');

 
  menuLinks.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    })
  })

  document.addEventListener('click', evt => {
      if (evt.target ===menuHamburger){
          if (menuHamburger.classList.contains('hamburger_active')){
            closeMenu();
          }
          else {
            openMenu();
          }
      }
      else {
          if (menuHamburger.classList.contains('hamburger_active')){
            if (!(menu.contains(evt.target))){
              console.log(menu.contains(evt.target));
              closeMenu();
            }
          }
      }
  })

  function closeMenu(){
    menuHamburger.classList.remove('hamburger_active');
    menu.style.top = '-150%';
    menuHamburger.style.position = 'relative';
    menuHamburger.style.right = 'auto';
    modal.classList.remove('popup_active');
    modal.style.background = 'none';
  }

  function openMenu(){
    menuHamburger.classList.add('hamburger_active');
    menu.style.top = '0';
    menuHamburger.style.position = 'fixed';
    menuHamburger.style.right = '64px';
    modal.classList.add('popup_active');
    modal.style.background = 'rgba(0,0,0, 0.5)';
  }   
 
}
