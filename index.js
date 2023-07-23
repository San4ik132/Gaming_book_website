const moreBtn = document.getElementById("more-btn");
const h1 = document.getElementById("h1");

const rotateBtn = (document.onmousemove = (e) => {
  var y = Math.round(window.innerHeight / 2 - e.y);
  var x = Math.round(window.innerWidth / 2 - e.x);
  moreBtn.style.transform = `rotate3d(${-y}, ${x}, 0, 12deg)`;
  moreBtn.style.transition = "none";
});

const noneRotateBtn = document.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    moreBtn.style.transform = "rotate3d(0, 0, 0, 0deg)";
    moreBtn.style.transition = "0.3s";
  }
});

// Проверяем, было ли выполнено обновление страницы
if (performance.navigation.type === 1) {
    // Обновление страницы произошло, перенаправляем на начальную страницу
    window.location.href = "index.html";
  }
