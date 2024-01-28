import { useEffect } from 'react';
import { useState } from 'react';
import { questionsType, persons } from "./data";
import './App.css';

function App() {

  const [checkerArray, setCheckerArray] = useState(persons);
  const [player, setPlayer] = useState();
  const [questionsTryes, setQuestionsTryes] = useState(0);
  const [electionTryes, setElectionTryes] = useState(0);

  const seleccionarJugador = (array) => {
    let numero = Math.floor(Math.random() * array.length);
    return numero;
  };

  const check = (election, key) => {
    const temporal = [...checkerArray].map((x) => {
      setQuestionsTryes(questionsTryes + 1);
      if (x[key] !== election) {
        return { ...x, opacity: 0.2, pointer: 'none' };
      }
      return x;
    });

    console.log(temporal);
    setCheckerArray(temporal);
  };

  const checkGame = (election) => {
    if (election === player.img) {
      alert("¡Acertaste pendejo!");
      window.location.reload();
    } else {
      setElectionTryes(electionTryes + 1);
      console.log("Fallaste");
    }
  };

  useEffect(() => {
    const whoIs = persons[seleccionarJugador(persons)];
    setPlayer(whoIs);
    console.log(whoIs);
  }, []);

  return (
    <>
    <div className='tryesBox'>
      <h1>Questions realized {questionsTryes}</h1>
      <h1>Selected tries {electionTryes}</h1>
    </div>
      
      <div className='characters'>
        {checkerArray.map((person, index) => (
          <img
            onClick={() => checkGame(person.img)}
            key={index}
            className='person'
            src={person.img}
            alt=''
            style={{ opacity: person.opacity, pointerEvents: person.pointer  }}
          />
        ))}
      </div>
      <div className='wallQuestions'>
        {questionsType.map((question, i) => (
          <div className='boxQuestion' key={i}>
            <h3 className='questionTitle'>{question.title}</h3>
            <div className='answers'>
              {question.questions.map((election, selector) => (
                <button key={selector} onClick={() => {check(election, question.key); }}>
                  {election}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;