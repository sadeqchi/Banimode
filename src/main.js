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


var swiper = new Swiper(".mySwiper_3", {
slidesPerView: 1,
spaceBetween: 10,
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
});
var swiper = new Swiper(".mySwiper_4", {
slidesPerView: 5,
spaceBetween: 30,
});
var swiper = new Swiper(".mySwiper_5", {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
const swiperOne = document.getElementById("swiperOne");
const endPointOne = "http://localhost:3000/swiperWonder";
fetch(endPointOne,Option)
.then((res) => res.json())
.then((api) => {
  const swiperOneApi = api.map ((items) => items )
  swiperOneApi.forEach( Element => {
    swiperOne.insertAdjacentHTML("beforeend",
      `
        <div id="${Element.id}" class="swiper-slide">
          <div class="swipercard">
            <img class="w-full h-full object-contain" src="${Element.image}" alt="">
            <p class="text-center text-sm line-clamp-1 font-extrabold p-5">${Element.title}</p>
            <div class="flex justify-between items-center p-2">
              <span class="text-stone-500"><s>${Element.offer}</s></span>
              <span class="flex justify-center items-center gap-x-1">${Element.price}<img class="w-5 h-5" src="../image/tomanLogo.png" alt=""></span>
            </div>        
          </div>
        </div>
        `
    )
    var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 5,
    spaceBetween: 20,
    });
  });
});
        


   