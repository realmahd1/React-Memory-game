import './SingleCard.css'
export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled)
            handleChoice(card)
    }
    return (
        <div className="card" key={card.id}>
            <div className={flipped ? 'flipped' : ''}>
                <img className='card-front' src={card.src} alt="card front" />
                <img className='card-back' onClick={handleClick} src='/img/cover.png' alt="card back" />
            </div>
        </div>
    )
}
