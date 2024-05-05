import './App.css'
import Header from './components/Header/Header'
import Body from './layouts/Body/Body'
import JournalList from './components/JournalList/JournalList'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])

  // Читаем данные из localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      )
    }
  }, [])

  // Записываем данные в localStorage
  useEffect(() => {
    if (items.length) {
      console.log('запись')
      localStorage.setItem('data', JSON.stringify(items))
    }
  }, [items])

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        post: item.post,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ])
  }

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App
