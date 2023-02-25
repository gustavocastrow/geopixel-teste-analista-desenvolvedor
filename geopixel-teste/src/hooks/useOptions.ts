import { useState } from 'react'

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