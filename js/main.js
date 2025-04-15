// <!-- Rewatch Swiper -->

  let swiper = new Swiper(".rewatch-card", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    
    navigation: {
      nextEl: ".rewatch-next",
      prevEl: ".rewatch-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });


// <!-- Top Swiper -->

  let topswiper = new Swiper(".top-card-rating", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    
    navigation: {
      nextEl: ".top-next",
      prevEl: ".top-prev",
    },
    
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

  // <!-- Trending Swiper -->

  let trendingswiper = new Swiper(".trending-card-rating", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    
    navigation: {
      nextEl: ".trending-next",
      prevEl: ".trending-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });


   // <!-- Rilis Terbaru Swiper -->

   let rilisswiper = new Swiper(".new-card-rating", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    
    navigation: {
      nextEl: ".new-next",
      prevEl: ".new-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

