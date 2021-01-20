document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector(".column__btn");
  let input = document.querySelector(".column__text");
  let colCont = document.querySelector(".column__container");

  let possibleColumnsInRow = Math.floor(window.visualViewport.width / 110);
  btn.addEventListener("click", () => {
    let newCol = document.createElement("div");
    //calculate total rows possible in a row, column width: 100px + gap: 10px

    newCol.innerText = input.value;
    newCol.classList.add("col");
    colCont.setAttribute(
      "style",
      `grid-template-columns: repeat(${possibleColumnsInRow}, 100px)`
    );
    colCont.appendChild(newCol);
    input.value = "";
  });
});
