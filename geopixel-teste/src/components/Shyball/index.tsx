import { useState } from "react";
import { generateRandomNumber } from "../../utils/generateRandomNumber";
import { Ball } from "./Ball";

interface ShyBallProps {
  boxWidth: number;
  boxHeight: number;
  ballWidth: number;
  ballHeight: number;
  stalker?: boolean //clone que segue a bola vermelha caso seja true.
}

interface Position {
  top: number;
  left: number;
}


export function ShyBall({boxWidth, boxHeight, ballWidth, ballHeight, stalker= false }: ShyBallProps){
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0
  });

  //função que gera uma nova posição para a bolinha na ação do hover.
  function handleNewPosition(){
    const newTopPosition = generateRandomNumber(0, boxHeight - ballHeight);
    const newLeftPosition = generateRandomNumber(0, boxHeight - ballWidth);

    setPosition({
      top: newTopPosition,
      left: newLeftPosition
    })
  }

  return (
    <div
      style={{
        width: boxWidth, 
        height: boxHeight, 
        border: "1px solid #F00", 
        position: "relative"
      }}
    >
      <Ball 
        height={ballHeight}
        width={ballHeight}
        onHover={handleNewPosition}
        stalker={stalker}
        {...position}
      />
    </div>
  );

}