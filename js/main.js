const img1 = document.querySelector('.img1');
const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');

// const img2 = document.querySelector('.img2');
// const prev2 = document.querySelector('.prev2');
// const next2 = document.querySelector('.next2');

function Slider() {
  i = 1; j = 1;

  next1.addEventListener('click', function(){ if(i >= 8) return; i++; img1.src = `img/2023/aula 1/${i}.jpg`;});
  prev1.addEventListener('click', function(){ if(i <= 1) return; i--; img1.src = `img/2023/aula 1/${i}.jpg`;});

  // next2.addEventListener('click', function(){ if(j >= 16) return; j++; img2.src = `img/2023/aula 2/${j}.jpg`;});
  // prev2.addEventListener('click', function(){ if(j <= 1) return; j--; img2.src = `img/2023/aula 2/${j}.jpg`;});
}
Slider();