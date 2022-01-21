export function language(){
  const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero__title': 'Alexa Rise',
      'hero__text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill__title_1': 'Digital photography',
      'skill__text_1': 'High-quality photos in the studio and on the nature',
      'skill__title_2': 'Video shooting',
      'skill__text_2': 'Capture your moments so that they always stay with you',
      'skill__title_3': 'Rotouch',
      'skill__text_3': 'I strive to make photography surpass reality',
      'skill__title_4': 'Audio',
      'skill__text_4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price__text_1': 'One location 120 photos in color 12 photos in retouch Readiness 2-3 weeks Make up, visage',
      'price__text_2': 'One or two locations 200 photos in color 20 photos in retouch Readiness 1-2 weeks Make up, visage ',
      'price__text_3': 'Tree locations or more 300 photos in color 50 photos in retouch Readiness 1 weeksMake up, visage, hairstyle',
      'order': 'Order shooting',
      'contacts__title': 'Contact me',
      'contacts-botton': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero__title': 'Алекса Райс',
      'hero__text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill__title_1': 'Фотография',
      'skill__text_1': 'Высококачественные фото в студии и на природе',
      'skill__title_2': 'Видеосъемка',
      'skill__text_2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill__title_3': 'Ретушь',
      'skill__text_3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill__title_4': 'Звук',
      'skill__text_4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price__text_1': 'Одна локация 120 цветных фото 12 отретушированных фото Готовность через 2-3 недели Макияж, визаж',
      'price__text_2': 'Одна-две локации 200 цветных фото 0 отретушированных фото Готовность через 1-2 недели Макияж, визаж',
      'price__text_3': 'Три локации и больше 300 цветных фото 50 отретушированных фото Готовность через 1 неделю Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contacts__title': 'Свяжитесь со мной',
      'contacts-botton': 'Отправить'
    }
  }

  const languagelinks = document.querySelectorAll('.language-selector__link');
  const languageSelector = document.querySelector('.language-selector');


  const getTranslate = () => document.addEventListener('click', evt => {    
    if(evt.target.classList.contains('language-selector__link')) {
      const currentLang = evt.target.dataset['i18'];
      const elementsForTranslated = document.querySelectorAll('[data-i18]');     
      // console.log(elementsForTranslated);
      console.log(currentLang); 
      elementsForTranslated.forEach((el) => {
        console.log('1');
        el.textContent = i18Obj.el[currentLang.dataset];        
      }) 
        

    }
  })
  

  getTranslate();
}
