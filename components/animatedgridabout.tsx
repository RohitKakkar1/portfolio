import { Tiles } from './ui/tiles'
import LampDemo from './ui/lamp'
import Services from './services/Services'

export const TilesGridAbout = () => (
  <AnimatedGridBackgroundSection2 >
                                   <Services />
  </AnimatedGridBackgroundSection2>
)

const AnimatedGridBackgroundSection2: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={
        'w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-start justify-center'
      }
    >
      <div className={'w-[100%] h-[100%] relative z-[2] -translate-y-40'}>{children}</div>
      
      <div className={'absolute top-0 left-0 h-full w-full  z-[1] pointer-events-auto'}>
        <Tiles rows={36} cols={24} />
      </div>
    </div>
  )
}
