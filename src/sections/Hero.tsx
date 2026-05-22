import emojiImage from '@/assets/images/emoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";

export const Hero = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800}>
        <StarIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center  mb-8">
          <Image
            className="size-[100px]"
            src={emojiImage}
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <span className="bg-green-500 size-2.5 rounded-full"></span>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide mb-4">Building Exceptional User Experiences</h1>
          <p className="text-center text-white/60 mb-8 md:text-lg">
            I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="hero-button border-white/15">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="hero-button border-white bg-white text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  )
};
