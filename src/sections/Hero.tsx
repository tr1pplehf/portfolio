import HeroOrbitBackground from '@/components/HeroOrbitBackground'
import emojiImage from '@/assets/images/emoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip min-h-lvh"
      id="main"
    >
      <HeroOrbitBackground />
      <div className="container">
        <div className="flex flex-col items-center mb-8">
          <Image
            className="size-[100px]"
            src={emojiImage}
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <p className="text-sm font-medium">Доступен для новых проектов</p>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide mb-4">Привет! Я Данил</h1>
          <p className="text-center text-white/60 mb-8 md:text-lg">
            Фронтенд разработчик, специализирующийся на создании современных веб-приложений с использованием React, TypeScript и Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            className="hero-button border-white/15"
            href="#portfolio"
          >
            <span className="font-semibold">Посмотреть проекты</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            className="hero-button border-white bg-white text-gray-900"
            href="#contacts"
          >
            <span>👋</span>
            <span className="font-semibold">Связаться со мной</span>
          </a>
        </div>
      </div>
    </section>
  )
};
