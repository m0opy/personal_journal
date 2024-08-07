import './JournalList.css'
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import { useContext, useMemo, useState } from 'react'
import { UserContext } from '../../context/user.context'

function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext)

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }

  const filteredItems = useMemo(
    () => items.filter((el) => el.userId === userId).sort(sortItems),
    [items, userId]
  )

  if (items.filter((el) => el.userId === userId).length === 0) {
    return <p>Записей нет. Добавьте первую!</p>
  }

  return (
    <div className="journal-list">
      {filteredItems.map((el) => (
        <CardButton key={el.id} onClick={() => setItem(el)}>
          <JournalItem
            title={el.title}
            post={el.post.length > 33 ? el.post.slice(0, 30) + '...' : el.post}
            date={el.date}
          />
        </CardButton>
      ))}
    </div>
  )
}

export default JournalList
