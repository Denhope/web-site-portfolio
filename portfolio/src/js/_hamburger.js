export function clickBurgerMenu () {
  const menuHamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__navigation');
  const menuLinks = menu.querySelectorAll('.navigation__link');
  const modal = document.querySelector('.popup');
  const body = document.querySelector('body')
 
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
            closeMenu();
          }
        }
      }
  })

  const closeMenu = () => {
    menuHamburger.classList.remove('hamburger_active');
    menu.style.top = '-150%';
    menuHamburger.style.position = 'relative';
    menuHamburger.style.right = 'auto';
    modal.classList.remove('popup_active');
    body.classList.remove('body_lock');
  }

  const openMenu = () => {
    menuHamburger.classList.add('hamburger_active');
    menu.style.top = '0';
    menuHamburger.style.position = 'fixed';
    menuHamburger.style.right = '64px';
    modal.classList.add('popup_active');
    body.classList.add('body_lock');
  }    
}
