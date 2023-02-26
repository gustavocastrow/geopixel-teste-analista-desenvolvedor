import { Clock } from './components/Clock';
import { ItemHandler } from './components/ItemHandler';
import { ShyBall } from './components/Shyball';

import styles from './App.module.css';
import './global.css';

export function App(){
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.clock}>
            <Clock />
          </div>
          <div className={styles.handleForm}>
            <ItemHandler />
          </div>
        </div>
        <div className={styles.section2}>
          <ShyBall
            stalker={false} //caso stalker seja true uma bola branca ira seguir a bola vermelha
            ballHeight={50}
            ballWidth={50}
            boxHeight={window.innerHeight}
            boxWidth={window.innerWidth / 2}
          />
        </div>
      </div>
      
    </div>
  )
}
