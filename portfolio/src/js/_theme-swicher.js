import changeClassActive from "./_base";
import { trans } from "./_base";
export function changeTheme() {
  const themeSwicher = document.querySelector(".header__theme-selector");
  themeSwicher.addEventListener("click", () => {
    const themeSwicherAttribute = themeSwicher.getAttribute("data-theme");
    setTheme(themeSwicherAttribute);
  });
}

export function setTheme(themeAttribute) {
  const themeSwicher = document.querySelector(".header__theme-selector");
  const themeInsta = document.querySelector(".sosial__insta");
  const themeFb = document.querySelector(".social__fb");
  const themeTw = document.querySelector(".social__tw");
  const themePi = document.querySelector(".social__pi");
  const themeLogo = document.querySelector(".header__logo");
  const lightModeElements = document.querySelectorAll("[data-theme]");

  lightModeElements.forEach((el) => {
    let attribute = themeAttribute;
    if (attribute === "dark") {
      trans();
      el.setAttribute("data-theme", "light");
      themeSwicher.src = `./assets/img/icons/header/theme-night.svg`;
      themeInsta.src = `./assets/img/icons/footer/inst 1.svg`;
      themeFb.src = `./assets/img/icons/footer/fb 1.svg`;
      themeTw.src = `./assets/img/icons/footer/tw 1.svg`;
      themePi.src = `./assets/img/icons/footer/pinterest 1.svg`;
      themeLogo.src = `./assets/img/icons/header/logo-light.svg`;
    } else {
      trans();
      el.setAttribute("data-theme", "dark");
      themeSwicher.src = `./assets/img/icons/header/carbon_sun.svg`;
      themeInsta.src = `./assets/img/icons/footer/insta.svg`;
      themeFb.src = `./assets/img/icons/footer/fb.svg`;
      themeTw.src = `./assets/img/icons/footer/tw.svg`;
      themePi.src = `./assets/img/icons/footer/pinterest.svg`;
      themeLogo.src = `./assets/img/icons/header/logo.svg`;
    }
  });
}
