let graphs = document.querySelectorAll(".graph div");
let progress = document.querySelectorAll(".progress");
let day = document.querySelectorAll(".day");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    for (i of data) {
      day.forEach((e) => {
        if (e.dataset.day === i.day) {
          let amount = document.createElement("span");
          amount.className = "amount";
          e.parentElement.prepend(amount);
          amount.innerHTML = i.amount;
          e.previousElementSibling.style.height = `${i.amount}%`;
        }
      });
    }

    let heightst = Math.max(
      ...Array.from(progress).map((e) => e.style.height.match(/\d+.\d+/g))
    );
    progress.forEach((e) => {
      if (e.style.height === `${heightst}%`) {
        e.style.backgroundColor = "hsl(186, 34%, 60%)";
      }
      e.addEventListener("mouseover", function () {
        e.parentElement.classList.add("hover");
      });
      e.addEventListener("mouseleave", function () {
        e.parentElement.classList.remove("hover");
      });
    });
  });
