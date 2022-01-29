import changeClassActive from "./_base";
export function changeTheme() {
  const themeSwicher = document.querySelector(".header__theme-selector");
  themeSwicher.addEventListener("click", () => {
    const themeSwicherAttribute = themeSwicher.getAttribute("data-theme");
    setTheme(themeSwicherAttribute);
    // console.log(themeSwicherAttribute);
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
    // let attribute = el.getAttribute("data-theme");
    let attribute = themeAttribute;
    if (attribute === "dark") {
      trans();
      el.setAttribute("data-theme", "light");
      themeSwicher.src = `./assets/image/svg/theme-night.svg`;
      themeInsta.src = `./assets/image/svg/inst 1.svg`;
      themeFb.src = `./assets/image/svg/fb 1.svg`;
      themeTw.src = `./assets/image/svg/tw 1.svg`;
      themePi.src = `./assets/image/svg/pinterest 1.svg`;
      themeLogo.src = `./assets/image/svg/logo-light.svg`;
    } else {
      trans();
      el.setAttribute("data-theme", "dark");
      themeSwicher.src = `./assets/image/svg/carbon_sun.svg`;
      themeInsta.src = `./assets/image/svg/insta.svg`;
      themeFb.src = `./assets/image/svg/fb.svg`;
      themeTw.src = `./assets/image/svg/tw.svg`;
      themePi.src = `./assets/image/svg/pinterest.svg`;
      themeLogo.src = `./assets/image/svg/logo.svg`;
    }
  });

  function trans() {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  }
}
