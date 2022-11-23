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
  ];

  const mappedIcon = iconCollection.map(
    (el, idx) =>
      `<div class="icon-box" key=${idx}>
    <div class="devicon"><img src= ${el.srclink} /></div>
    <span class="devicon-comment">${el.name}</span>
    <div>`
  );

  document.querySelector("#icon-container").innerHTML = mappedIcon;
}

App();
