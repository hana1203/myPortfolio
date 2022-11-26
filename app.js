function App() {
  const iconCollection = [
    {
      name: "HTML",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },

    {
      name: "React",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Redux Toolkit",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Styled-components",
      srclink: "https://www.styled-components.com/atom.png",
    },
    {
      name: "Java",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Git",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Github",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      srclink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Notion",
      srclink:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    },
  ];

  //02 Section
  const mappedIcon = iconCollection
    .map(
      (el) =>
        `<div class="icon-box">
      <div class="devicon"><img src= ${el.srclink} /></div>
      <span class="devicon-comment">${el.name}</span>
    </div>`
    )
    .join("");

  document.querySelector("#icon-container").innerHTML = mappedIcon;

  //03 Section Carousel
  const carousel = document.querySelector(".carousel-container");
  let carouselWidth = carousel.clientWidth;
  const prevBtn = document.querySelector(".slide_prev_button");
  const nextBtn = document.querySelector(".slide_next_button");

  const carouselItems = document.querySelectorAll(".carousel-item");
  const maxCarousel = carouselItems.length;

  let currentCarousel = 1;

  const pagination = document.querySelector(".slide_pagination");
  for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
  }

  const paginationItems = document.querySelectorAll(".slide_pagination > li");
  console.log(paginationItems);
}

App();
