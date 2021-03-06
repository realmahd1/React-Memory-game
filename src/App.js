import { useState, useEffect } from 'react';
import './App.css'
import SingleCard from './components/singleCard/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]
function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurn(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn(turn + 1);
    setDisabled(false);
  }

  // compare the selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(cards.map(card => card.src === choiceOne.src ? { ...card, matched: true } : card));
        resetTurn();
      }
      else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo,resetTurn])

  // start new game automatically
  useEffect(() => {
    shuffleCards();
  },[]);
  
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map((card) => <SingleCard key={card.id} card={card} handleChoice={handleChoice} disabled={disabled} flipped={card === choiceOne || card === choiceTwo || card.matched} />)}
      </div>
      <p>Turns: {turn}</p>
    </div>
  );
}

export default App