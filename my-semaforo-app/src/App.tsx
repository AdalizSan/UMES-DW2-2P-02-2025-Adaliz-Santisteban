//Importacion para utilizar los segundos del semaforo
import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

function App() {
  const [segundos, setSegundos] = useState(5);
  const [color, setColor] = useState('red');
  const [anteriorColor, setAnteriorColor] = useState('');

  useEffect(()=>{
    if(segundos > 0){
      const tiempo = setTimeout(()=>{
        setSegundos(segundos - 1);
      }, 1000);
      return () => clearTimeout(tiempo);
    }
  }, [segundos]);


  useEffect(()=>{
    if(segundos === 0){
      if (color === 'red'){
        setColor('green');
        setSegundos(5);
        setAnteriorColor('red');
      } else if (color === 'green'){
        setColor('yellow');
        setSegundos(5);
        setAnteriorColor('green');
      } else if (color === 'yellow'){
        setColor('red');
        setSegundos(5);
        setAnteriorColor('yellow');
      }
    }
  }, [segundos, color]);


  return (
    <>
      <div className="segundos">
          {segundos}
      </div>
        <div className="semaforo">
          <div className= {`red ${color === 'red' ? 'active' : ''} ${anteriorColor === 'red' ? 'previous' : ''}`}></div>
          <div className= {`yellow ${color === 'yellow' ? 'active' : ''} ${anteriorColor === 'yellow' ? 'previous' : ''}`}></div>
          <div className= {`green ${color === 'green' ? 'active' : ''} ${anteriorColor === 'green' ? 'previous' : ''}`}></div>
        </div>
        <div className="buttons">
          <button onClick={() => setSegundos(5)}>
            5 segundos
          </button>
          <button onClick={() => setSegundos(10)}>
            10 segundos
          </button>
        </div>

    </>
  )
}

export default App
