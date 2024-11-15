let btn = document.querySelectorAll(".right .img");


btn.forEach( (btns, i, a) => {
  

  a[i].addEventListener("click", () => {
  let img = document.querySelector(".left .img");
    
    img.setAttribute('src', `./event_test/p${i}.jpg`);
  });
  
});