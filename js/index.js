window.onload = function () {
  // 위로 이동하기
  // .gotolp을 js에 저장하자
  const goTop = document.querySelector(".gotop");
  goTop.addEventListener("click", function(){
    //위로 슬라이드 이동 코드
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
  // <!-- Initialize Swiper -->
  let promotionswiper = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg",
      clickable: true,
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
    },
  });

  // <!-- Shopping Swiper -->

  let shopping = new Swiper(".sw-shopping", {
    slidesPerView: 5,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });

  let tourswiper = new Swiper(".sw-tour", {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        // 화면당 2개씩 슬라이드 이동
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });

  let ticketswiper = new Swiper(".sw-ticket", {
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });

  let liveswiper = new Swiper(".sw-live", {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });

  let booksswiper = new Swiper(".sw-books", {
    slidesPerView: 3,
    grid: {
      rows: 4,
      fill: "row",
    },
    spaceBetween: 19,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 27,
        grid: {
          rows: 1,
        },
      },
    },
  });

  let eventsswiper = new Swiper(".sw-events", {
    slidesPerView: 3,
    spaceBetween: 27,
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
    },
  });
};
