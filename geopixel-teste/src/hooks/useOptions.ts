import { useState } from 'react'
//hook customizado criado para extraiar a as lógicas de:
//adicionar um item
//limpar dropdown 
//remover item
export const useOptions = () => {
  const [options, setOptions] = useState<string[]>([])

  const addOption = (newItem: string) => {
    setOptions((currentOptions) => [...currentOptions, newItem])
  }

  const clearOptions = () => {
    setOptions([])
  }

  const removeOption = (item: string) => {
    const newOptions = options.filter((option) => option !== item)

    setOptions(newOptions)
  }

  return { options, addOption, clearOptions, removeOption }
}