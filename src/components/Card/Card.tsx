import grainImage from "@/assets/images/grain.jpg";
import {ComponentPropsWithoutRef} from "react";
import {twMerge} from "tailwind-merge";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import Image from 'next/image'
import Button from '@/components/Button'
import '@/types/project'
import type {ProjectData} from '@/types/project'

type CardProps = ProjectData & Omit<ComponentPropsWithoutRef<'div'>, keyof ProjectData>

const Card = ({
  className,
  company,
  year,
  title,
  results = [],
  links = [],
  image,
  ...other
}: CardProps) => {
  return (
    <div
      className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden" +
        " after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2" +
        " after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20" +
        " after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}
      ></div>
      <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text mb-2 md:mb-5">
            <span>{company}</span>
            <span>&bull;</span>
            <span>{year}</span>
          </div>
          <h3 className="font-serif text-2xl md:text-4xl mb-4 md:mb-5">{title}</h3>
          <hr className="border-t-2 border-white/5 mb-4 md:mb-5" />
          <ul className="flex flex-col gap-4 mb-8">
            {results.map(({title}) => (
              <li
                className="flex gap-2 text-sm md:text-base text-white/50"
                key={title}
              >
                <CheckCircleIcon className="size-5 md:size-6" />
                <span>{title}</span>
              </li>
            ))}
          </ul>
          {links.map(({demoLink, githubLink}, index) => (
            <div
              className="flex md:gap-4 sm:flex-col md:flex-row"
              key={index}
            >
              <Button
                label="Демо"
                href={demoLink}
              />
              <Button
                label="GitHub"
                href={githubLink}
              />
            </div>
          ))}
        </div>
        <div className="relative">
          <Image
            className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl "
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Card