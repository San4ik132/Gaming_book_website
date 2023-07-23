const moreBtn = document.getElementById("more-btn");
const h1 = document.getElementById("h1");

const rotateBtn = (document.onmousemove = (e) => {
  var y = Math.round(window.innerHeight / 2 - e.y);
  var x = Math.round(window.innerWidth / 2 - e.x);
  moreBtn.style.transform = `rotate3d(${-y}, ${x}, -10, 25deg)`;
  moreBtn.style.transition = ".5s";
});

const noneRotateBtn = document.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    moreBtn.style.transform = "rotate3d(0, 0, 0, 0deg)";
    moreBtn.style.transition = ".5s";
  }
});
const ClickRotateBtn = (document.onmouseout = (e) => {
  if(moreBtn.offsetHeight >= e.x && moreBtn.offsetWidth <= e.x){
    moreBtn.style.transform = "rotate3d(0, 0, 0, 0deg)";
    moreBtn.style.transition = ".5s";
  }
});

// Проверяем, было ли выполнено обновление страницы
if (performance.navigation.type === 1) {
    // Обновление страницы произошло, перенаправляем на начальную страницу
    window.location.href = "index.html";
  }
