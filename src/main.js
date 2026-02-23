for (let i = 1; i <= 10; i++) {
  document.getElementById(`bergurMenu-${i}`).className =
    "w-full p-6 h-10 flex justify-center items-center bg-amber-200 hover:bg-sky-500";
}
var swiper = new Swiper(".mySwiper_1", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".mySwiper_2", {
      slidesPerView: 5,
      spaceBetween: 30,
    });
    var swiper = new Swiper(".mySwiper_3", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });