type LogoProps = {
  width?: number
  height?: number
  className?: string
  [key: string]: unknown | undefined
}

export function Logo({ width, height, className, ...args }: LogoProps) {
  return (
    <>
      <div className="hidden lg:block">
        <img
          className="max-w-32"
          src="/assets/logos/rvagrubs-horizontal.png"
          alt="rvagrubs horizontal logo"
        />
      </div>
      <div className="block lg:hidden">
        <img
          className="max-w-12 rounded-full"
          src="/assets/logos/rvagrubs-new.png"
          alt="rvagrubs horizontal logo"
        />
      </div>
    </>
  )
}

export const SquareLogo = ({ width, height, className, ...args }: LogoProps) => {
  return (
    <img
      className="rounded-full"
      src="/assets/logos/rvagrubs-new.png"
      alt="rvagrubs horizontal logo"
    />
  )
}
