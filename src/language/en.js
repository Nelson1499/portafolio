import { ProjectsdataEng } from "../data/projectseng";

export default {
  nav: [
    {
      parragram: "Exp",
      id: "exp",
    },
    {
      parragram: "Projects",
      id: "project",
    },
    {
      parragram: "Skills",
      id: "skills",
    },
    {
      parragram: "About Me",
      id: "aboutme",
    },
    {
      parragram: "Contacts",
      id: "contact",
    },
  ],
  exp: {
    title: "Experience",
    job: "VGS Sistemas",
    date: "Feb. 2023 - Mar. 2024 · 1 year 2 months",
    description: [
      {
        li: "Development and testing of web services with RESTful APIs.",
      },
      {
        li: "Developed and tested web user interfaces with React and other frameworks.",
      },
      {
        li: "JavaScript. Used version control systems like git to manage projects.",
      },
    ],
  },
  hproject: "Projects",
  projects: [...ProjectsdataEng],
  hskill: "Skills",
  aboutme: {
    title: "About Me",
    p: [
      "I'm a passionate junior full-stack developer who loves creating engaging and secure web experiences. I can build functional and responsive interfaces, develop and secure robust APIs, and work with databases using SQL queries.",
      "I'm enthusiastic about learning new technologies and collaborating on challenging projects. I'm diligent, solution-oriented, and open to feedback to constantly improve my programming skills.",
      "I'm ready to join a dynamic team and contribute to the development of innovative web projects.",
    ],
  },
  contacts: {
    title: "Contactos",
    list: "Lista de contacto",
    form: {
      title: "Contact Form",
      errors: {
        email: "Please enter a valid email address",
        emailrequired: "Please enter an email address",
        name: "Please enter your name",
        message: "Please enter a message",
      },
      placeholdernames:{
        pname: "Name",
        pmessage: "Message",
        pmail: "email address"
      },
      send: "Send"
    },
  },
};
