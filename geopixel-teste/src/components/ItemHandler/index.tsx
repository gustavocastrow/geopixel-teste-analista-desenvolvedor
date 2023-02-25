import { useState } from 'react'
import { useOptions } from '../../hooks/useOptions';
import styles from './ItemHandler.module.css';

export function ItemHandler(){
  const [inputValue, setInputValue] = useState<string>('')
  const [info, setInfo] = useState<string>('Selecione uma opção')
  const { options, addOption, clearOptions, removeOption } = useOptions()

  const handleAdd = () => {
    if (!inputValue.trim()) return setInfo('Sem conteúdo')
    if (options.includes(inputValue)) return setInfo('Item já existente')

    addOption(inputValue)
    setInputValue('')
    setInfo('Adicionado com Sucesso')
  }

  const handleClear = () => {
    clearOptions()
    setInfo('Caixa limpada com Sucesso')
  }

  const handleRemove = () => {
    if (!options.includes(inputValue)) return setInfo('Item não existente')
    removeOption(inputValue)
    setInputValue('')
    setInfo('Removido com Sucesso')
  }

  return (
    <div>
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
      <div>
        <button onClick={handleAdd}>Adicionar</button>
        <button onClick={handleRemove}>Remover</button>
        <button onClick={handleClear}>Limpar caixa</button>
      </div>  
      <p>{info}</p>
    </div>
  )
}