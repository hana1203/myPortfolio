export const iconsData = [
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

export const projectsData = [
  {
    id: 1,
    idName: "fridge",
    imgPath: [
      "src/images/mainpgset.png",
      "src/images/loginpg.png",
      "src/images/modalsearchpg.png",
      "src/images/myprofilepg.png",
      "src/images/myrecipepg.png",
    ],
    projectName: "Fridge for living on their own",
    projectDesc:
      "Cooking recipes app specializing in people living alone. It recommends recipes based on ingredients they have in their fridge.",
    projectSpec: "Code States final project (4 people / 5 weeks)",
    techList: ["React", "Redux Toolkit", "Redux Persist", "Styled-component"],
    projectLink: {
      githubRepo: "https://www.seb39myfridge.ml/",
      url: "https://github.com/codestates-seb/seb39_main_052",
    },
  },
  {
    id: 2,
    idName: "companybot",
    imgPath: [
      "src/images/wbot_da.png",
      "src/images/wbot_filter.png",
      "src/images/wbot_login.png",
    ],
    projectName: "Automatic bot for billing system",
    projectDesc:
      "A Bot program to minimize simple, routine, and manual work at my previous job.",
    projectSpec: "Myself (2 weeks)",
    techList: ["Python", "Selenium"],
    // projectLink: {
    //   githubRepo: "",
    //   url: "",
    // },
  },
];
