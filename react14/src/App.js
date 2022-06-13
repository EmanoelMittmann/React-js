//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

//Data
import { wordsList } from "./Data/words";

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
]
const guessesQty = 3

function App() {
  const[gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  

  const pickWordAndCategory = useCallback(() =>{
    //pick a random category
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);
    //pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word)

    return{word, category};
  },[words]);

  //start secret word game
  const startGame = useCallback(() =>{
    clearLetterStates();
    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    //create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);
    console.log(word, category);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  },[pickWordAndCategory]);
  // process the letter input
  const verifyLetter = (letter) =>{

    const normalizedLetter = letter.toLowerCase()

    //check if letter has already been utilized

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }
    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    }else{
      setWrongLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
      setGuesses((actualGuessed) => actualGuessed - 1)

    }

  };

  const clearLetterStates = () =>{
    setGuessedLetters([]);
    setWrongLetters([])
  }
 //check if guesses ended
  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates()
      setGameStage(stages[2].name);
    }
  },[guesses]);
   
  //check win condition
  useEffect(()=>{

    const uniqueLetters = [...new Set(letters)]

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      // add score
      setScore((actualScore) => actualScore += 100);

      //restart
      startGame()
    }

    console.log(uniqueLetters)
  },[guessedLetters, letters, startGame])

  //restarts the game
  const retry = () =>{
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game
       verifyLetter={verifyLetter} 
       pickedWord={pickedWord} 
       pickedCategory={pickedCategory} 
       letters={letters}
       guessedLetters={guessedLetters}
       wrongLetters={wrongLetters}
       guesses={guesses}
       score={score}
       />}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}


export default App;