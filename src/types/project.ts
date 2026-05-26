import {StaticImageData} from 'next/image'

export type Result = {
  title: string;
};

export type Link = {
  demoLink: string;
  githubLink: string;
};

export type ProjectData = {
  company: string;
  year: string;
  title: string;
  results: Result[];
  links: Link[];
  image: StaticImageData;
};