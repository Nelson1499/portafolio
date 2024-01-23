import shopping from "../images/shopping.jpg";
import birdsocial from "../images/birdsocial.jpg";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandSupabase } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

export const Projectsdata = [
  {
    Title: "Birdsocial",
    Url: "http://birdsocial.vercel.app/",
    Repository: "https://github.com/Nelson1499/birdsocial",
    Description: "Clon de twitter con algunas cosa diferentes",
    Imagen: birdsocial,
    Frameworks: [
      {
        Framework: "Nextjs",
        icon: TbBrandNextjs
      },
      {
        Framework: "Tailwindcss",
        icon: BiLogoTailwindCss
      },

    ],
  },
  {
    Title: "Shopping",
    Url: "https://nelson1499.github.io/my-app-shopping/#/",
    Repository: "https://github.com/Nelson1499/my-app-shopping",
    Description: "Tienda online",
    Imagen: shopping,
    Frameworks: [
      {
        Framework: "Tailwindcss",
        icon: BiLogoTailwindCss,
      },
      {
        Framework: "React",
        icon: BiLogoReact,
      },
    ],
  },
];
