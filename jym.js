window.onload = function(){
    const swiper_mbanner = new Swiper('#banner.swiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 4,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
}
