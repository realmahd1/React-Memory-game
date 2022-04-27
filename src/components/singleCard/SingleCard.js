import './SingleCard.css'
export default function SingleCard({ card , handleChoice}) {
    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className="card" key={card.id}>
            <img className='card-front' src={card.src} alt="card front" />
            <img className='card-back' onClick={handleClick} src='/img/cover.png' alt="card back" />
        </div>
    )
}
