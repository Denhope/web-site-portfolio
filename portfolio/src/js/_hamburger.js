export function clickBurgerMenu () {
  const menuHamburger = document.querySelector('.header__hamburger');
  const menuSpan = document.querySelector('.hamburger__line');
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
      if ((evt.target ===menuHamburger) || (evt.target ===menuSpan)) {
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
    menu.classList.remove('header__navigation_hamburger_active');
    menuHamburger.style.position = 'relative';
    menuHamburger.style.right = 'auto';
    modal.classList.remove('popup_active');
    body.classList.remove('body_lock');
  }

  const openMenu = () => {
    menu.classList.add('header__navigation_hamburger_active');
    menuHamburger.classList.add('hamburger_active');
    menuHamburger.style.position = 'fixed';
    menuHamburger.style.right = '64px';
    modal.classList.add('popup_active');
    body.classList.add('body_lock');
  }    
}
