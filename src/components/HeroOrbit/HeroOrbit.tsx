import {PropsWithChildren} from "react";

export const HeroOrbit = ({ children, size }: PropsWithChildren<{ size: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="border border-red-500" style={{
        width: `${size}px`,
        height: `${size}px`
      }}>
        <div className="inline-flex border border-red-500">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroOrbit