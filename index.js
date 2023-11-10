let graphs = document.querySelectorAll(".graph div");
let day = document.querySelectorAll(".day");
let graph = document.querySelector(".graph");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    for (i of data) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      let span = document.createElement("span");
      let amount = document.createElement("span");
      graph.appendChild(div);
      div.appendChild(p);
      div.appendChild(span);
      div.prepend(amount);
      amount.className = "amount";
      p.className = "progress";
      span.className = "day";
      span.innerHTML = i.day;
      p.style.height = `${i.amount}%`;
      amount.innerHTML = i.amount;
    }
    let progress = document.querySelectorAll(".progress");
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
