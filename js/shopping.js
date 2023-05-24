/**
 * 작성자 : 홍길동
 * 연락처 : aaa@aaa.net;
 * 작성일 : 23-05-22
 * 기능 : 쇼핑몰 리스트 슬라이드 코드
 * 업데이트 : 각 쇼핑몰 리스트 목록 출력 함수화 작업
 */
window.addEventListener("load", function () {
  // 메뉴를 실행시에 쇼핑 목록 slide 내용 변경
  function parseShopping(_menu) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (event) {
      let req = event.target;
      if (req.readyState === XMLHttpRequest.DONE) {
        let data = JSON.parse(req.response);
        makeShoppingSlide(data);
      }
    };

    // 전달된 매개변수 _menu 에 따라서
    // 관련된 json 데이터를 불러들이고,
    if (_menu === "쎈딜") {
      xhr.open("GET", "data/shoppingdata.json");
    } else if (_menu === "베스트") {
      xhr.open("GET", "data/shoppingdata1.json");
    } else if (_menu === "오늘만특가") {
      xhr.open("GET", "data/shoppingdata2.json");
    } else if (_menu === "어린이날") {
      xhr.open("GET", "data/shoppingdata3.json");
    } else if (_menu === "소담상회") {
      xhr.open("GET", "data/shoppingdata4.json");
    }
    xhr.send();

    // html 을 만들어서
    // slide 를 만들어준다.
  }
  parseShopping("쎈딜");

  // swiper 슬라이더는 만들기 전에 삭제하자.
  let shoppingSwiper;

  function makeShoppingSlide(_data) {
    let swShoppingHtml = ``;
    for (let i = 0; i < _data.good_count; i++) {
      let obj = _data[`good_${i + 1}`];

      let temp = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="good">
              <img src="images/${obj.pic}" alt="${obj.product}" />
              <div class="good-info">
                <ul class="good-info-list">
                  <li>
                    <b><span>${obj.ratio}%</span> ${obj.price}원</b>
                  </li>
                  <li><p>${obj.product}</p></li>
                </ul>
              </div>
            </a>
          </div>
        `;
      swShoppingHtml += temp;
    }
    let swShoppingWrapper = document.querySelector(
      ".sw-shopping .swiper-wrapper"
    );
    swShoppingWrapper.innerHTML = swShoppingHtml;

    // 새로 생성전에 swiper API 를 이용해서 삭제한다.
    if (shoppingSwiper) {
      shoppingSwiper.destroy();
    }

    shoppingSwiper = new Swiper(".sw-shopping", {
      slidesPerView: 5,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 10,
      navigation: {
        nextEl: ".shopping .sw-next",
        prevEl: ".shopping .sw-prev",
      },
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
  }
  // 버튼 클릭시 카테고리 변경
  // 대상이 1개인 경우는 querySelector
  // 대상이 여러개이면 querySelectorAll
  // a태그가 4개이므로 querySelectorAll

  let btns = document.querySelectorAll(".shopping .btns a");
  let ateName = ["쎈딜", "베스트", "오늘만특가", "어린이날", "소담상회"];
  for (let i = 0; i < ateName.length; i++) {
    btns[i].onclick = function (event) {
      event.preventDefault();
      parseShopping(ateName[i]);
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("btns-active");
      }
      this.classList.add("btns-active");
    };
  }
});
