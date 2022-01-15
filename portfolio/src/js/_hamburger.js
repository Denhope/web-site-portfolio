export function burger () {
  const menuHamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__navigation');
  const menuLinks = menu.querySelectorAll('.navigation__link');
 
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
    menu.style.top = '-100%';
    }

  function openMenu(){
    menuHamburger.classList.add('hamburger_active');
    menu.style.top = '0';
  }
}
