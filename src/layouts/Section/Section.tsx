import SectionHeader from '@/components/SectionHeader'
import {PropsWithChildren} from 'react'


const Section = ({
  id,
  eyebrow,
  title,
  description,
  children
}: PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}>) => {
  return (
    <section
      className="pb-16 lg:py-24"
      id={id}
    >
      <div className="container">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </div>
    </section>
  )
}

export default Section  