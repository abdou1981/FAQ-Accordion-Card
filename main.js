let textQua = Array.from(document.querySelectorAll(".text-qua"));
let imgQua = Array.from(document.querySelectorAll(".text-qua img"));
let textAnsw = document.querySelectorAll(".text-answ");

textQua.forEach(hed => {
  hed.addEventListener("click", (el) => {
    if (el.currentTarget.classList.contains("active")) {
      el.currentTarget.classList.remove("active");
      textAnsw[textQua.indexOf(el.currentTarget)].classList.remove("active");
      imgQua[textQua.indexOf(el.currentTarget)].classList.remove("active1");
    } else {
      textQua.forEach(el => { 
        el.classList.remove("active");
      })
      textAnsw.forEach(el => { 
        el.classList.remove("active");
      })
      imgQua.forEach(el => { 
        el.classList.remove("active1");
      })
      el.currentTarget.classList.add("active");
      textAnsw[textQua.indexOf(el.currentTarget)].classList.add("active");
      imgQua[textQua.indexOf(el.currentTarget)].classList.add("active1");
    }
  })
})

