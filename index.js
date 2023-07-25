const moreBtn = document.getElementById("more-btn");
const h1 = document.getElementById("h1");

const rotateBtn = (document.onmousemove = (e) => {
  var y = Math.round(window.innerHeight / 2 - e.y);
  var x = Math.round(window.innerWidth / 2 - e.x);
  moreBtn.style.transform = `rotate3d(${-y}, ${x}, 0, 25deg)`;
  moreBtn.style.boxShadow = `${x / 80}px ${
    y / 80
  }px 10px 5px rgba(0, 0, 0, 0.5)`;
  moreBtn.style.transition = ".5s";
});

const noneRotateBtn = document.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    moreBtn.style.transform = "rotate3d(0, 0, 0, 0deg)";
    moreBtn.style.boxShadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.5)";
    moreBtn.style.transition = ".5s";
  }
});

const stopNoneRotateBtn = document.addEventListener("mouseover", (e) => {
  if (e.relatedTarget === null) {
    console.log("123");
    moreBtn.style.transform = "rotate3d(0, 0, 0, 0deg)";
    moreBtn.style.boxShadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.5)";
    moreBtn.style.transition = ".5s";
  }
});

// Проверяем, было ли выполнено обновление страницы
if (performance.navigation.type === 1) {
  // Обновление страницы произошло, перенаправляем на начальную страницу
  window.location.href = "index.html";
}
