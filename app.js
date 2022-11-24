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
      srclink:
        "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
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
}

App();
