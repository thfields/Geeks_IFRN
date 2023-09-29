const img1 = document.querySelector('.img1');
const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');

const img2 = document.querySelector('.img2');
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');

const img3 = document.querySelector('.img3');
const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');

const img4 = document.querySelector('.img4');
const prev4 = document.querySelector('.prev4');
const next4 = document.querySelector('.next4');

const img5 = document.querySelector('.img5');
const prev5 = document.querySelector('.prev5');
const next5 = document.querySelector('.next5');

function Slider() {
  i = 1; j = 1; k = 1; l = 1; n = 1;

  next1.onclick = () => { if(i >= 23) return; i++; img1.src = `img/2017/aula 1/${i}.jpg`;};
  prev1.onclick = () => { if(i <= 1) return; i--; img1.src = `img/2017/aula 1/${i}.jpg`;};

  next2.onclick = () => { if(j >= 8) return; j++; img2.src = `img/2017/aula 2/${j}.jpg`;};
  prev2.onclick = () => { if(j <= 1) return; j--; img2.src = `img/2017/aula 2/${j}.jpg`;};

  next3.onclick = () => { if(k >= 15) return; k++; img3.src = `img/2017/aula 3/${k}.jpg`;};
  prev3.onclick = () => { if(k <= 1) return; k--; img3.src = `img/2017/aula 3/${k}.jpg`;};

  next4.onclick = () => { if(l >= 17) return; l++; img4.src = `img/2017/aula 4/${l}.jpg`;};
  prev4.onclick = () => { if(l <= 1) return; l--; img4.src = `img/2017/aula 4/${l}.jpg`;};

  next5.onclick = () => { if(n >= 17) return; n++; img5.src = `img/2017/aula 5/${n}.jpg`;};
  prev5.onclick = () => { if(n <= 1) return; n--; img5.src = `img/2017/aula 5/${n}.jpg`;};
}
Slider();