import { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState("00:00:00")
    const [date, setDate] = useState("")

    useEffect(() => {
        const Timer = () => {
            const clock = new Date()
            const minutes = clock.getMinutes().toString().padStart(2, '0');
            const hour = clock.getHours().toString().padStart(2, '0');
            const sec = clock.getSeconds().toString().padStart(2, '0');
            
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const formattedDate = clock.toLocaleDateString('en-US', options);
            
            setTime(`${hour}:${minutes}:${sec}`)
            setDate(formattedDate)
        }
        Timer()
        let Duration = setInterval(Timer, 1000)
        return () => clearInterval(Duration);
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="bg-black/40 backdrop-blur-lg text-white p-12 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-center">
                    <div className="text-7xl font-mono font-bold tracking-wider text-cyan-400 mb-4">
                        {time}
                    </div>
                    <div className="text-xl text-gray-300 font-medium">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock
