import shopping from "../images/shopping.jpg";
import birdsocial from "../images/birdsocial.jpg";
import shorturl from "../images/short-url.jpg";
import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoPostgresql
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandSupabase } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

export const ProjectsdataEng = [
  {
    Title: "Birdsocial",
    Url: "http://birdsocial.vercel.app/",
    Repository: "https://github.com/Nelson1499/birdsocial",
    Description: "It's a microblogging demo in the style of X (formerly known as Twitter), where you can post, like posts and comments, interact through comments, and send messages.",
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
    Description: "It's an online store demo where you can add products to your basket and pay for your products with Stripe.",
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
    Description: "Web page to shorten URLs with many characters.",
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
