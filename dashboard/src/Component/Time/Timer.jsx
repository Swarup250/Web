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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full border border-slate-700/50">
                
                {/* Work Duration Input */}
                <div className="mb-8 text-center">
                    <label className="block text-slate-300 text-sm font-semibold mb-3">Work Duration (minutes)</label>
                    <input 
                        value={workDur} 
                        min={1} 
                        max={120} 
                        type="number" 
                        onChange={(e) => setWorkDur(e.target.value)}
                        className="w-24 px-4 py-2 text-center text-xl font-bold border-2 border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none bg-slate-700 text-white hover:bg-slate-600 transition-all duration-200"
                    />
                </div>

                {/* Timer Display */}
                <div className="bg-slate-950 rounded-2xl p-8 mb-8 text-center shadow-inner border border-slate-800">
                    <h2 className="text-slate-400 text-lg font-semibold mb-4">Timer</h2>
                    <div className="font-mono text-5xl font-bold text-white leading-tight">
                        <span className="text-cyan-400">{minute}</span>
                        <span className="text-slate-500 mx-2">:</span>
                        <span className="text-purple-400">{seconds}</span>
                    </div>
                    <div className="text-slate-500 text-sm mt-2">minutes : seconds</div>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-3 justify-center">
                    <button 
                        onClick={() => setActive(true)}
                        className="flex-1 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/25"
                    >
                        ▶️ Start
                    </button>
                    <button 
                        onClick={() => setActive(false)}
                        className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-amber-500/25"
                    >
                        ⏸️ Pause
                    </button>
                    <button 
                        onClick={() => { setTime(25*60); setWorkDur(25); }}
                        className="flex-1 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-rose-500/25"
                    >
                        🔄 Reset
                    </button>
                </div>
            </div>
        </div>
    </>
)

}

export default Timer