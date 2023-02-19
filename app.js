import { iconsData, projectsData } from "./data.js";

function App() {
  console.log = function no_console() {};
  //header
  const toggleBtn = document.querySelector(".navbar-toggleBtn");
  const navbarMenu = document.querySelector(".navbar-menu");
  toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
  });

  //nav-list 누르면 닫히기 - navbarMenu active 없애기
  // const navList = document.querySelector(".nav-list"); //맨처음 요소만 선택되서 not working
  //그 상위요소인 navbarMenu에 클릭이벤트를 주어 이벤트 위임
  navbarMenu.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    console.log(navbarMenu.classList);
    toggleBtn.classList.remove("active");
  });

  //02 Section
  const iconsMapped = iconsData
    .map(
      (el) =>
        `<div class="icon-box">
      <div class="devicon"><img src= ${el.srclink} /></div>
      <span class="devicon-comment">${el.name}</span>
    </div>`
    )
    .join("");

  document.querySelector("#icon-container").innerHTML = iconsMapped;

  //03 Section Carousel
  //js projectsData 데이터 개수만큼 project-container 마크업 만들기
  const $projectContainer = projectsData
    .map(
      (el) =>
        `<div class="project-container" id=id${el.id}>
          <div class="carousel-container" id=id${el.id}>
        ${el.imgPath
          .map(
            (elimg) => `<div class="carousel-item"><img src=${elimg} /></div>`
          )
          .join("")}
        <div class="slide_prev_button slide_button" id=id${
          el.id
        }><i class="fa-solid fa-angle-left"></i> </div>
        <div class="slide_next_button slide_button" id=id${
          el.id
        }><i class="fa-solid fa-angle-right"></i> </div>
        <ul class="slide_pagination" id=id${el.id}></ul>
          </div>
          <div class="project-content">
          <h3>${el.projectName}</h3>
          <p>${el.projectDesc}</p>
          <div>${el.projectSpec}</div>
          <ul class="tech-list-ul">
          ${el.techList
            .map((eltech) => `<li class="tech-list">${eltech}</li>`)
            .join("")}
          </ul>
        ${
          el.projectLink
            ? `<div class="project-link">
        <a href=${el.projectLink.githubRepo}><i class="fa-brands fa-github"></i></a>
        <a href=${el.projectLink.url}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>`
            : ""
        }
      </div>
    </div>`
    )
    .join("");

  document
    .querySelector("#work")
    .insertAdjacentHTML("beforeend", $projectContainer);

  const carousel = document.querySelector(".carousel-container"); //the first carousel node
  let carouselWidth = carousel.offsetWidth; //캐러셀컨테이너가 차지하고있는 전체너비 //left 0으로 시작했다가 컨테이너 너비만큼 왼쪽, 오른쪽으로 움직여야하므로 필요
  // console.log(carouselWidth);

  // 브라우저 크기 변경시 이에 맞는 캐러셀 너비로 리사이즈
  window.addEventListener("resize", () => {
    carouselWidth = carousel.offsetWidth;
  });

  const idStrArr = ["id1", "id2"]; //프로젝트 id를 담아주는 배열

  //각 프로젝트 개수에 맞게 버튼, 페이지네이션 만들기
  for (let idStr of idStrArr) {
    const $prevBtn = document.querySelector(`.slide_prev_button#${idStr}`); //class가 .slide이면서 id가 #idStr인 경우 AND 선택
    console.log("$prevBtn", $prevBtn);
    const $nextBtn = document.querySelector(`.slide_next_button#${idStr}`);

    const carouselItems = document.querySelectorAll(
      `.carousel-container#${idStr} > .carousel-item`
    );
    console.log("carouselItems", carouselItems); //한 개 box에 있는것만 잘 담김
    const maxCarousel = carouselItems.length;
    let currCarousel = 1;

    //페이지네이션 생성
    const pagination = document.querySelector(`.slide_pagination#${idStr}`);

    for (let i = 0; i < maxCarousel; i++) {
      if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
      else pagination.innerHTML += `<li>•</li>`;
    }

    const paginationItems = document.querySelectorAll(
      `.slide_pagination#${idStr} > li`
    );
    console.log("paginationItems", paginationItems);

    //오른쪽 버튼에 클릭 이벤트 추가
    $nextBtn.addEventListener("click", () => {
      currCarousel++;
      if (currCarousel <= maxCarousel) {
        const offset = carouselWidth * (currCarousel - 1);
        //각 캐러셀 아이템 left에 offset적용
        carouselItems.forEach((el) =>
          el.setAttribute("style", `left: ${-offset}px`)
        );
        //슬라이드 이동시 현재 활성화된 페이지네이션 변경
        paginationItems.forEach((el) => el.classList.remove("active"));
        paginationItems[currCarousel - 1].classList.add("active");
      } else {
        currCarousel--;
      }
    });

    //왼쪽 버튼에 이벤트 추가
    $prevBtn.addEventListener("click", () => {
      currCarousel--;
      if (currCarousel > 0) {
        const offset = carouselWidth * (currCarousel - 1);
        carouselItems.forEach((el) =>
          el.setAttribute("style", `left: ${-offset}px`)
        );
        paginationItems.forEach((el) => el.classList.remove("active"));
        paginationItems[currCarousel - 1].classList.add("active");
      } else {
        currCarousel++;
      }
    });

    //페이지네이션 dot 클릭으로 이동
    for (let i = 0; i < maxCarousel; i++) {
      //페이지네이션 li요소에 클릭이벤트 추가
      paginationItems[i].addEventListener("click", () => {
        currCarousel = i + 1;
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = carouselWidth * (currCarousel - 1);
        // 각 슬라이드 아이템의 left에 offset 적용
        carouselItems.forEach((el) =>
          el.setAttribute("style", `left: ${-offset}px`)
        );
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((el) => el.classList.remove("active"));
        paginationItems[currCarousel - 1].classList.add("active");
      });
    }
  }
}

App();
