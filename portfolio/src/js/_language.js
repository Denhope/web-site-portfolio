import i18Obj from "./_translate";
import changeClassActive from "./_base";
export function changeLanguage() {
  const languagelinks = document.querySelectorAll(".language-selector__link");
  changeClassActive("language-selector__link", languagelinks, "i18");

  document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("language-selector__link")) {
      let currentLang = evt.target.id;
      setLang(currentLang);
    }
  });
}
export const setLang = (lg) => {
  const elementsForTranslated = document.querySelectorAll("[data-i18]");
  elementsForTranslated.forEach(
    (el) => (el.textContent = i18Obj[lg][el.dataset.i18])
  );
};
