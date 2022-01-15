export function portfolio() {
  const portfolioBtn = document.querySelector('.portfolio__button');
const portfolioImages = document.querySelectorAll('.portfolio__item');

portfolioImages.forEach((img, index) => img.src = `./src/assets/portfolio/winter/${index + 1}.jpg`);

const portfolioBtns = document.querySelector('.portfolio__buttons-container');

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    // здесь код функции, меняющей src изображений
  }
}
}
