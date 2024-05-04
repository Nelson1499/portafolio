import { ProjectsdataEsp } from "../data/projectsesp";

export default {
  nav: [
    {
      parragram: "Exp",
      id: "exp",
    },
    {
      parragram: "Proyectos",
      id: "project",
    },
    {
      parragram: "Habilidades",
      id: "skills",
    },
    {
      parragram: "Sobre Mi",
      id: "aboutme",
    },
    {
      parragram: "Contactos",
      id: "contact",
    },
  ],
  exp: {
    title: "Experiencia",
    job: "VGS Sistemas",
    date: "feb. 2023 - mar. 2024 · 1 año 2 meses",
    description: [
      {
        li: "Desarrollo y testeo de servicios web con API RESTful."
      },
      {
        li: "Desarrollado y testeado interfaces de usuario web con React y otros frameworks"
      },
      {
        li: "JavaScript. Utilizado sistemas de control de versiones como git para gestionar proyectos."
      }
    ]
  },
  hproject: "Proyectos",
  projects: [...ProjectsdataEsp],
  hskill: "Habilidades",
  aboutme: {
    title: "Sobre mí",
    p: [
      "Soy un desarrollador full-stack junior apasionado por crear experiencias web atractivas y seguras. Sé construir interfaces funcionales y responsivas, desarrollar y asegurar APIs robustas, y trabajar con bases de datos utilizando consultas SQL.",
      "Me entusiasma aprender nuevas tecnologías y colaborar en proyectos desafiantes. Soy diligente, orientado a soluciones y estoy abierto a recibir retroalimentación para mejorar constantemente mis habilidades de programación.",
      "Estoy listo para unirme a un equipo dinámico y contribuir en el desarrollo de proyectos web innovadores."
    ]
  },
  contacts: {
    title: "Contactos",
    list: "Lista de contacto",
    form: {
      title: "Formulario de contacto.",
      errors: {
        email: "Por favor, ingresa un correo electrónico válido",
        emailrequired: "Por favor, ingresa un correo electrónico",
        name: "Por favor, ingresa tu nombre",
        message: "Por favor, ingresa un mensaje"
      },
      placeholdernames:{
        pname: "Nombre",
        pmessage: "Mensaje",
        pmail: "Correo electrónico"
      }
      ,
      send: "Enviar"
    }
  }
};
