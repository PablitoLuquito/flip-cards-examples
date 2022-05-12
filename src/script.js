const card = document.querySelectorAll(".card-inner");

card.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("flip");
  });
});

const btn = document.querySelectorAll(".clica");

btn.forEach((i) => {
  const rata = document.querySelector(".rata");
  i.addEventListener("click", () => {
    rata.classList.toggle("flip");
  });
});
