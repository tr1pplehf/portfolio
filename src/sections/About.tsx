'use client'

import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CardHeader from "@/components/Card/CardHeader"
import ToolboxItems from "@/components/ToolboxItems";

import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import JavascriptIcon from '@/assets/icons/js.svg'

import bookImage from "@/assets/images/book-cover.png"
import mapImage from '@/assets/images/map.png'
import smileEmoji from '@/assets/images/emoji-smile.png'

import Image from "next/image";
import { motion } from "framer-motion"
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

export const About = () => {
  const constraintRef = useRef(null)

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-5 m gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto">
                <Image
                  src={bookImage}
                  alt="Book Cover"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
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
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1"
                   ref={constraintRef}
              >
                {hobbies.map(hobby => (
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r
                   from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    key={hobby.title}
                  >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                    <span>
                    {hobby.emoji}
                  </span>
                  </motion.div>
                ))}
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
          </div>
        </div>
      </div>
    </section>
  )
};
