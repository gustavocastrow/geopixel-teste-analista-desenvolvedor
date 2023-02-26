import { useState } from 'react'
import { useOptions } from '../../hooks/useOptions';
import styles from './ItemHandler.module.css';

export function ItemHandler(){
  const [inputValue, setInputValue] = useState<string>('')
  const [info, setInfo] = useState<string>('Selecione uma opção')
  const { options, addOption, clearOptions, removeOption } = useOptions()

  //função que vai ser acionada quando o usuário interagir com o botão adicionar
  const handleAdd = () => {
    if (!inputValue.trim()) return setInfo('Sem conteúdo') //verifica se o input tem conteudo
    if (options.includes(inputValue)) return setInfo('Item já existente')//verifica se no estado já existe a palavra

    addOption(inputValue)// através do hook customizado addOption ele adiciona o input Value
    setInputValue('')//limpando o input
    setInfo('Item adicionado com sucesso!')
  }

  //funcão que limpa o dropbox através do hooks customizado clearOptions
  const handleClear = () => {
    clearOptions()
    setInfo('Caixa limpada com Sucesso')
  }

  //função para remover um item do array
  const handleRemove = () => {
    if (!options.includes(inputValue)) return setInfo('Item não existente')//verifica se o input informado existe 
    removeOption(inputValue)
    setInputValue('')
    setInfo('Removido com Sucesso')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <select>
          <option>Selecione uma opção</option>
          {options.map((item, index) => <option key={`${item}-${index}`}>{item}</option>)}
        </select>
        <input 
          value={inputValue} 
          onInput={(e) => setInputValue(e.currentTarget.value)} 
          type="text" 
          placeholder="Insira um item"
        />
      </div>
      <div className={styles.handleButtons}>
        <button onClick={handleAdd}>Adicionar</button>
        <button onClick={handleRemove}>Remover</button>
        <button onClick={handleClear}>Limpar caixa</button>
      </div>
      <div className={styles.textInfo}>
        <p>{info}</p>
      </div> 
    </div>
  )
}