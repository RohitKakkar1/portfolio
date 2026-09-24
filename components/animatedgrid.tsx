import { Tiles } from './ui/tiles'
import LampDemo from './ui/lamp'
import Services from './services/Services'
import { StickyScrollRevealDemo } from './stickyscrolldemo'

export const TilesGrid = () => (
  <AnimatedGridBackgroundSection >
      <LampDemo />
  </AnimatedGridBackgroundSection>
)

const AnimatedGridBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={
        'w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-start justify-center'
      }
    >
      <div className={'w-fit h-fit relative z-[2] -translate-y-20'}>{children}</div>
      
      <div className={'absolute top-0 left-0 h-full w-full  z-[1] pointer-events-auto'}>
        <Tiles rows={36} cols={48} />
      </div>
    </div>
  )
}
