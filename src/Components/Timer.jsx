import React, { useEffect, useState,useRef } from 'react'
import "./timer.css"

const Timer = () => {

    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);

    const intervalIdRef = useRef(null);


    const start = () => {
        intervalIdRef.current = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    setMinutes(prevMinutes => prevMinutes + 1);
                  return 0;
                } else {
                  return prevSeconds + 1;
                }
              });
              
            //   if (seconds === 59) {
            //     setMinutes(prevMinutes => prevMinutes + 1);
            //   }
              
              
        }, 1000);
      };
      
      const resume = () => {
        start();
      };
      
      const restart = () => {
        clearInterval(intervalIdRef.current);
        setSeconds(0);
        setMinutes(0);
        start();
      };
      

    const stop=()=>{
        clearInterval(intervalIdRef.current);
    }
  return (
    <div>

       <div className='stopwatch-container'>

            <div className='stopwatch'>

                <section>
                <span className="material-symbols-outlined"></span>
                    <h1>Stop Watch</h1>
                </section>
    
                <section>
                    <h2>{minutes<10?"0":""}{minutes}:{seconds<10?"0":""}{seconds}</h2>
                </section>

                <section>
                <button className='btn btn-warning' onClick={start}>Start</button>
                <button className='btn btn-info' onClick={resume}>Resume</button>
                    
                    <button className='btn btn-success' onClick={restart}>Restart</button>
                    <button className='btn btn-danger' onClick={stop}>Stop</button>
                </section>

            </div>

        </div>
    </div>
  )
}

export default Timer