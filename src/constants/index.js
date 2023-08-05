import {  paint , html , css , javascript , react , tailwind, figma, visual , laptop, computer } from "../assets";
export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About me",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "achievement",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact"
    }

];

export const skillData = [
  {
    id : "design",
    title : "Design",
    content : "Design is very important for every front-end developer , so we must have a first look at the site we want to develop by choosing the appropriate colors and fonts, using many tools such as Figma , Adobe xd",
    img : figma,
  },
]

export const skillsDataReverse = [
  {
    id : "developement",
    title : "Developement",
    content : "This is the main stage where I turn the design into a real interactive and responsive website with all devices using programming languages and libraries such as : Html , Css , Tailwindcss , Javascript , React.js",
    img : visual,
  }
]



export const whoIm = [
  {
    id : "whoIm",
    title : "< Frontend Developer >",
  },
 
]


export const projectData = [
  { 
    id :"crud",
    bg: laptop,
    title : "Crud",
    image: [
      {
        id : "html1",
        icon : html,
      },
      {
        id : "css1",
        icon : css,
      },{
        id : "javascript1",
        icon : javascript,
      }
    ]
  },
  { 
    id :"hoobank",
    bg: figma,
    title : "HooBank",
    image: [
      {
        id : "javascript1",
        icon : javascript,
      },
      {
        id : "react1",
        icon : react,
      },
      {
        id : "tailwind1",
        icon : tailwind,
      }
    ]
  },
  { 
    id :"quiz",
    bg :  html,
    title : "Quiz",
    image: [
      {
        id : "html1",
        icon : html,
      },
      {
        id : "css1",
        icon : css,
      },{
        id : "javascript1",
        icon : javascript,
      }
    ]
  },
]


