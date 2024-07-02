import './JournalList.css'
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import { useContext } from 'react'
import { UserContext } from '../../context/user.context'

function JournalList({ items }) {
  const { userId } = useContext(UserContext)

  if (items.filter((el) => el.userId === userId).length === 0) {
    return <p>Записей нет. Добавьте первую!</p>
  }
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }
  return (
    <div className="journal-list">
      {items
        .filter((el) => el.userId === userId)
        .sort(sortItems)
        .map((el) => (
          <CardButton key={el.id}>
            <JournalItem title={el.title} post={el.post} date={el.date} />
          </CardButton>
        ))}
    </div>
  )
}

export default JournalList
