import { Clock } from './components/Clock';
import { ShyBall } from './components/Shyball';

export function App(){
  return(
    <div>
      <Clock />
      <ShyBall
        stalker
        ballHeight={50}
        ballWidth={50}
        boxHeight={400}
        boxWidth={600}
      />
    </div>
  )
}