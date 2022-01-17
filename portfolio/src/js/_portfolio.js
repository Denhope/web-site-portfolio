export function portfolio() {
 
  const portfolioBtn = document.querySelector('.portfolio__button');
  const portfolioBtns = document.querySelectorAll('.portfolio__button');
  const portfolioBtnsContanier = document.querySelector('.portfolio__buttons-container');
  const portfolioImages = document.querySelectorAll('.portfolio__item');


  document.addEventListener('click', evt => {

    
    if(evt.target.classList.contains('portfolio__button')) {
      let activeBtn = evt.target.dataset['season'];
      console.log(`нажатие-${activeBtn}`);      
      portfolioBtns.forEach((item) => {
        item.classList.remove('button_active');
          if (!item.classList.contains(activeBtn) ) {
          evt.target.classList.add('button_active');

          
          portfolioImages.forEach((img, index) => {
            img.src = `.src/assets/img/${activeBtn}/${index+ 1}.jpg`;
            console.log('функция смена изображений');
          })   
        }
     });    
    }                 
  })  

  function prelodImages() {
    const seasons = ['summer', 'winter', 'spring', 'autum'];
    seasons.forEach((el) => {
      for (let i =1; i <= 6; i++) {
        const img = new Image();
        img.src = `.src/assets/portfolio/${el}/${i}.jpg`;
        console.log('prelodfunction');
      }
    })
  }
  // prelodImages(); 



  // function changeImage() {   
  // portfolioBtn.forEach((item) => {
  //   portfolioImages.forEach((img, index) => {
  //     img.src = `.src/assets/portfolio/${item.dataset.season}/${index+ 1}.jpg`;
  //     console.log('функция');
  //   })          
  // })
// }
}


   
 