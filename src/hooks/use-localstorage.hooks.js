import { useState, useEffect } from 'react'

export function useLocalStorage(key) {
  const [data, setData] = useState([])

  // Читаем данные из localStorage
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key))
    if (res) {
      setData(res)
    }
  }, [])

  // Записываем данные в localStorage
  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData))
    setData(newData)
  }

  return [data, saveData]
}
