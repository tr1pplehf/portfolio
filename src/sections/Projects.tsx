import streamvibeImage from "@/assets/images/stream-vibe.jpg";
import futuretechImage from "@/assets/images/future-tech.jpg";
import positivusImage from "@/assets/images/positivus.jpg";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";


const portfolioProjects = [
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

export const Projects = () => {
  return (
    <section
      className="pb-16 lg:py-24"
      id="portfolio"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Реальные результаты"
          title="Мои проекты"
          description="Каждый проект — это уникальная часть моего путешествия в разработке, созданные с упором на пользовательский опыт и результат."
        />
        <div className="flex flex-col gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
              key={index}
            >
              <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text mb-2 md:mb-5">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mb-4 md:mb-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mb-4 md:mb-5" />
                  <ul className="flex flex-col gap-4 mb-8">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.links.map((link, index) => (
                    <div
                      className="flex md:gap-4 sm:flex-col md:flex-row"
                      key={index}
                    >
                      <a
                        className="flex mb-8 lg:mb-0"
                        href={link.demoLink}
                      >
                      <span className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Демо</span>
                        <ArrowUpRightIcon className="size-4" />
                      </span>
                      </a>
                      <a
                        className="flex mb-8 lg:mb-0"
                        href={link.githubLink}
                      >
                      <span className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>GitHub</span>
                        <ArrowUpRightIcon className="size-4" />
                      </span>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <Image
                    className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl "
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};
