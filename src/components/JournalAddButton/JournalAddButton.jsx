import CardButton from '../CardButton/CardButton'
import './JournalAddButton.css'

function JournalAddButton({ creatNote }) {
  return (
    <CardButton className="journal-add" onClick={creatNote}>
      <img src="/plus-btn.svg" alt="+" />
      Новое воспоминание
    </CardButton>
  )
}

export default JournalAddButton
