import shopping from "../images/shopping.jpg";
import birdsocial from "../images/birdsocial.jpg";
import shorturl from "../images/short-url.jpg";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql
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
    webTech: [
      {
        tech: "Nextjs",
        icon: TbBrandNextjs
      },
      {
        tech: "Tailwindcss",
        icon: BiLogoTailwindCss
      },
      {
        tech: "Supabase",
        icon: TbBrandSupabase
      },
    ],
  },
  {
    Title: "Shopping",
    Url: "https://nelson1499.github.io/my-app-shopping/#/",
    Repository: "https://github.com/Nelson1499/my-app-shopping",
    Description: "Tienda online",
    Imagen: shopping,
    webTech: [
      {
        tech: "Tailwindcss",
        icon: BiLogoTailwindCss,
      },
      {
        tech: "React",
        icon: BiLogoReact,
      },
    ],
  },
  {
    Title: "short url",
    Url: "https://acortador-url-xi.vercel.app/",
    Repository: "https://github.com/Nelson1499/acortador-url",
    Description: "Acortar Urls",
    Imagen: shorturl,
    webTech: [
      {
        tech: "Nextjs",
        icon: TbBrandNextjs
      },
      {
        tech: "Css",
        icon: BiLogoCss3,
      },
      {
        tech: "Postgresql",
        icon: BiLogoPostgresql
      }
    ],
  },
];
