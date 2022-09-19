const Dies = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

const renderDie = function (event) {

  const targetElement = event.target; // span ou li ou ul

  if (targetElement.closest("li")) {
    let li = targetElement.closest("li");
    document.body.firstElementChild.insertAdjacentHTML(
      "afterbegin",
      `<p> ${Dies[li.dataset.die]} </p>`
    );
  }
};
ul = document.querySelector("ul");

ul.addEventListener("click", renderDie, false);
