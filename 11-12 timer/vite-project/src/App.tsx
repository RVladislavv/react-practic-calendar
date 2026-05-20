import './App.css'
import {useEffect, useRef, useState} from "react";

// TODO: сделать компонент таймер
/*

1) 5 : 00 таймер
2) кнопки start stop reset
3) логику какую-то обратного отсчёта и формирования сделать

*/

const TIME_INITIAL_STATE = 5 * 60

const formatTime = (totalSeconds: number): string => {
    return new Date(totalSeconds * 1000)
        .toISOString()
        .slice(14, 19)
}

function App() {
    const [time, setTime] = useState(TIME_INITIAL_STATE)

    const ref = useRef<number | null>(null)

    const handleStart = () => {
        ref.current = setInterval(() => {
            setTime(prevTime => prevTime - 1)
        }, 1000)
    }

    const handleStop = () => {
        if(ref.current) {
            clearInterval(ref.current)
        }
    }

    const handleReset = () => {
        if(ref.current) {
            clearInterval(ref.current)
        }
        setTime(TIME_INITIAL_STATE)
    }

    useEffect(() => {
        if(time <= 0) {
            handleStop()
        }
    }, [time])

  return (
    <>
      <section id="top">
        <div>
          <h1>Timer</h1>
          <h1 style={{ color: 'red' }}>
              {formatTime(time)}
          </h1>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
