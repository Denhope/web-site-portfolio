const changeClassActive = (className, selectorAll, datasetName) =>
  document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains(className)) {
      let activeBtn = evt.target.dataset[datasetName];
      selectorAll.forEach((item) => {
        item.classList.remove(`${className}_active`);
        if (!item.classList.contains(activeBtn)) {
          evt.target.classList.add(`${className}_active`);
        }
      });
    }
  });

export default changeClassActive;
