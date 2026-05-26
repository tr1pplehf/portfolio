import Card from "@/components/Card";
import Section from '@/layouts/Section'
import projectItems from '@/sections/Projects/projectItems'

const Projects = () => {
  return (
    <Section
      eyebrow="Реальные результаты"
      title="Мои проекты"
      description="Каждый проект — это уникальная часть моего путешествия в разработке, созданные с упором на пользовательский опыт и результат."
      id="portfolio"
    >
      <div className="flex flex-col gap-20">
        {projectItems.map((projectItem, index) => (
          <Card
            className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky"
            style={{
              top: `calc(64px + ${index * 40}px)`,
            }}
            {...projectItem}
            key={index}
          />
        ))}
      </div>
    </Section>
  )
};

export default Projects