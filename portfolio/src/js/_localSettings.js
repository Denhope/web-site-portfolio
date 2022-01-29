import { setLang } from "./_language";
import { setTheme } from "./_theme-swicher";
export function setLocalsettings() {
  function setLocalStorage() {
    const html = document.querySelector("html");
    let theme = html.getAttribute("data-theme");
    const languageActive = document.querySelector(
      ".language-selector__link_active"
    );
    let lang = languageActive.id;
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", lang);
  }

  window.addEventListener("beforeunload", setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem("lang")) {
      const lang = localStorage.getItem("lang");
      setLang(lang);
    }

    if (localStorage.getItem("theme")) {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
  }

  window.addEventListener("load", getLocalStorage);
}
