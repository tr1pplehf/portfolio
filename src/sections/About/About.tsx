'use client'

import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CardHeader from "@/components/Card/CardHeader"
import ToolboxItems from "@/components/ToolboxItems";
import hardSkills from '@/sections/About/hardSkills'
import softSkills from '@/sections/About/softSkills'

import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import JavascriptIcon from '@/assets/icons/js.svg'
import mapImage from '@/assets/images/map.jpg'
import smileEmoji from '@/assets/images/emoji-smile.png'

import Image from "next/image";
import {useRef} from 'react'

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },

  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },

  {
    title: 'CSS3',
    iconType: CssIcon,
  },

  {
    title: 'React',
    iconType: ReactIcon,
  },

  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },

  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },

  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },

  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%',
  },

  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },

  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },

  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '5%',
    top: '65%',
  },

  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

const About = () => {
  const constraintRef = useRef(null)

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Взляд в мой мир"
          title="Обо мне"
          description="Узнайте больше обо мне, о том, чем я занимаюсь и что меня вдохновляет."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-5 m gap-8 lg:grid-cols-3">
            <Card className="h-[320px] col-span-2">
              <CardHeader
                title="Меня зовут Данил Якименко"
                description="Мне 21 год. Живу в г.Абакан"
              />
              <div className="flex flex-col gap-4 md:pb-8 md:px-10">
                <p>Я люблю создавать красивые, функциональные и доступные веб-приложения.</p>
                <p>Меня захватывает процесс разработки и возможность создания удобных и полезных продуктов.</p>
                <p>Я открыт к предложениям на позицию frontend-разработчика, где могу внести свой вклад и развиваться вместе с компанией.</p>
              </div>
            </Card>
            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
                alt="map"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             size-20 rounded-full
             aftet:content-[''] after:absolute after:inset-0 after:outline after:outline-2
             after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  className="size-20"
                  src={smileEmoji}
                  alt="smiling emoji"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="Мои инструменты"
                description="Ознакомьтесь с технологиями и инструментами, которые я использую для создания веб-приложений"
              />
              <ToolboxItems
                className="mb-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                items={toolboxItems}
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 m gap-8">
            <Card className="md:col-span-2">
              <CardHeader
                title="Hard Skills"
                description="Мои профессиональные навыки"
              />

                <ul className="flex flex-col gap-2 md:pb-8 md:px-10">
                  {hardSkills.map(({hardSkill}, index) => (
                    <li
                      className="py-3 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl text-gray-900"
                      key={index}
                    >
                      {hardSkill}
                    </li>
                  ))}
                </ul>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader
                title="Soft Skills"
                description="Мои социальные навыки"
              />

              <ul className="flex flex-col gap-2 md:pb-8 md:px-10">
                {softSkills.map(({softSkill}, index) => (
                  <li
                    className="py-3 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl text-gray-900"
                    key={index}
                  >
                    {softSkill}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About