  $(document).ready(function(){

    var _width = $(window).width();
  
    const loop_auto_center_3_pc ={      
      loop: true,    
      containerModifierClass : 'pc_slide-',     
      autoplay: {
        delay: 4000,
        disableOnInteraction : false,
      },
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  
    const loop_auto_center_3_m ={      
      loop: true,       
      autoplay: {
        delay: 3000,
        disableOnInteraction : false,
      },
      slidesPerView: 1.5,
      spaceBetween: 20,  
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },   
    }
  
  
    var swiper_mbanner = undefined; 
  
    if( _width < 768 ){     
      if(swiper_mbanner != undefined){ 
         swiper_mbanner.destroy(); 
      }
      swiper_mbanner = new Swiper('#banner.swiper', loop_auto_center_3_m );    
    }else{   
      if(swiper_mbanner != undefined){ 
        swiper_mbanner.destroy(); 
     }
     swiper_mbanner = new Swiper('#banner.swiper', loop_auto_center_3_pc ); 
    }
  
  })
  
     
  