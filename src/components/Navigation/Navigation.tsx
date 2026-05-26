import navigationItems from '@/components/Navigation/navigationItems'
import {twMerge} from 'tailwind-merge'

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-1 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navigationItems.map(({label, href, isActive}, index) => (
          <li className="" key={index}>
            <a
              className={twMerge("nav-item", isActive ? 'is-active' : '')}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation  