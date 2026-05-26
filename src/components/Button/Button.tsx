import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const Button = ({
  label,
  href
}: {
  label: string;
  href: string;
}) => {

  return (
    <a
      className="flex mb-8 lg:mb-0"
      href={href}
    >
      <span className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
        <span>{label}</span>
        <ArrowUpRightIcon className="size-4" />
      </span>
    </a>
  )
}

export default Button  