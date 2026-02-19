for (let i = 1; i <= 10; i++) {
  document.getElementById(`bergurMenu-${i}`).className =
    "w-full p-6 h-10 flex justify-center items-center bg-amber-200 hover:bg-sky-500";
}
// ----------------------swiper banner main---------------------------
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
