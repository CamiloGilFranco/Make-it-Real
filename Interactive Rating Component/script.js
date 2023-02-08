let radios = document.querySelectorAll(".radio");
let labels = document.querySelectorAll("label");
let submit = document.querySelector(".submit-button");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let stars = document.querySelector(".quantity");

let number = 0;

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", (e) => {
    for (let j = 0; j < radios.length; j++) {
      labels[j].classList.remove("color-change");
    }

    labels[i].classList.add("color-change");
    number = radios[i].value;
  });
}

submit.addEventListener("click", (e) => {
  if (number !== 0) {
    e.preventDefault();
    card1.classList.add("none");
    card2.classList.remove("none");
    stars.innerHTML = number;
  } else {
    alert("Please choose a rating");
  }
});
