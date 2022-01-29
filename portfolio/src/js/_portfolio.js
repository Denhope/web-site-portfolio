import changeClassActive from "./_base";

export function changeImage() {
  const portfolioBtns = document.querySelectorAll(".portfolio__button");
  const portfolioImages = document.querySelectorAll(".portfolio__item");
  changeClassActive("portfolio__button", portfolioBtns, "season");

  document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("portfolio__button")) {
      let activeBtn = evt.target.dataset["season"];
      getImage(activeBtn);
    }
  });

  const getImage = (btn) => {
    portfolioImages.forEach((img, index) => {
      img.src = `./assets/img/${btn}/${index + 1}.jpg`;
    });
  };
}

export const prelodImages = () => {
  const seasons = ["summer", "winter", "spring", "autum"];
  seasons.forEach((el) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${el}/${i}.jpg`;
    }
  });
};
