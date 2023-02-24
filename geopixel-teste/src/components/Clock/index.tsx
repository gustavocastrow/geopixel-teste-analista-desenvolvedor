import { useEffect, useState } from "react";

export function Clock(){
  const [time, setTime] = useState(new Date().toLocaleDateString());

  const getTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    setTime(currentTime);
  }

  useEffect(() => { //hook de efeito colateral.
    setTimeout(getTime, 1000);
  }, [time]); //array de dependencias

  return (
    <div>{time}</div>
  )

} 