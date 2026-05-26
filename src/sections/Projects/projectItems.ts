import streamvibeImage from "@/assets/images/stream-vibe.jpg";
import futuretechImage from "@/assets/images/future-tech.jpg";
import positivusImage from "@/assets/images/positivus.jpg";
import type {ProjectData} from '@/types/project'


const projectItems: ProjectData[] = [
  {
    company: "Пет-проект",
    year: "2026",
    title: "Stream Vibe",
    results: [
      {title: "JSX"},
      {title: "SCSS"},
      {title: "JavaScript, Vite, Minista, БЭМ"},
    ],
    links: [
      {
        demoLink: "https://tr1pplehf.github.io/future-tech/",
        githubLink: "https://github.com/tr1pplehf"
      }
    ],

    image: streamvibeImage,
  },
  {
    company: "Пет-проект",
    year: "2026",
    title: "Future Tech",
    results: [
      {title: "JSX"},
      {title: "SCSS"},
      {title: "JavaScript, Vite, Minista, БЭМ"},
    ],
    links: [
      {
        demoLink: "https://tr1pplehf.github.io/future-tech/",
        githubLink: "https://github.com/tr1pplehf"
      }
    ],

    image: futuretechImage,
  },
  {
    company: "Пет-проект",
    year: "2026",
    title: "Positivus",
    results: [
      {title: "JSX"},
      {title: "SCSS"},
      {title: "JavaScript, Vite, Minista, БЭМ"},
    ],
    links: [
      {
        demoLink: "https://tr1pplehf.github.io/future-tech/",
        githubLink: "https://github.com/tr1pplehf"
      }
    ],

    image: positivusImage,
  },

];

export default projectItems