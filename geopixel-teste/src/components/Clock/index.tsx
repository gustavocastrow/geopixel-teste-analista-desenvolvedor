import { useEffect, useState } from "react";
import styles from './Clock.module.css';

export function Clock(){
  const [time, setTime] = useState(new Date().toLocaleDateString());

  //função getTime utilizada para pegar a data/hora atual
  //e setar ela para uma string para ser renderizada na tela
  const getTime = () => {
    const date = new Date();
    console.log(date)
    const currentTime = date.toLocaleTimeString('pt-BR');
    
    //Através do hook useState conseguimos fazer o gerenciamento do estado
    //com a função setTime conseguimos alterar o estado do time.
    setTime(currentTime);
  }

  //Aqui estamos utilizando o hook useEffect com a função setTimeout sendo passada
  //como primeiro parametro que sera executada assim que o componente for renderizado,
  //no segundo parametro temos um array com a variavel time que vai fazer
  //a função setTimeout ser executada novamente.
  useEffect(() => { //hook de efeito colateral.
    setTimeout(getTime, 1000);
  }, [time]);

  return (
    <div className={styles.clockContainer}>
      <h1>{time}</h1>
    </div>
  )

} 