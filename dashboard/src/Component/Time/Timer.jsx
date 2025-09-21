import React, { useEffect, useState } from 'react'

function Timer() { 
    const [workDur ,setWorkDur] = useState(25);
    const [time,setTime] = useState(workDur*60);
    const [active, setActive] = useState(false);

    useEffect(() => {
    setTime(workDur * 60);
    },[workDur]);
    
    useEffect(()=>{
        if(!active) return;
        if(time === 0) return setActive(false);
        const interval = setInterval(()=>{
            setTime((t) => t -1);
        },1000)
        return () => clearInterval(interval);
    },[time,active])

    const minute = Math.floor(time / 60);
    const seconds = time % 60
    return (
    <>
    <input value={workDur} min={1} max={120} 
    type="number" onChange={(e) => setWorkDur(e.target.value)}></input>
    <div>Timer
        minute = {minute}
        seconds = {seconds};
    </div>
    <div>
        <button onClick={() => setActive(true)}>Start</button>
        <button onClick={() => setActive(false)}>Pause</button>
        <button onClick={() => { setTime(25*60); setWorkDur(25); }}
            >Rest</button>
    </div>
    </>
    )
}

export default Timer