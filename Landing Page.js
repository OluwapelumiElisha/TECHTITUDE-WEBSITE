var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper("#mySwiper", {
  pagination: {
    el: "#swiper-pagination",
  },
});
  function Menu() {
    if (menuclick.hidden == true) {
        menuclick.hidden = false
    }else{
        menuclick.hidden = true
    }
}
function list() {
  menuclick.hidden = true
}

