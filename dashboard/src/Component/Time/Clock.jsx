import { useEffect, useState } from 'react'

function Clock() {
    
    const [time,setTime] = useState("Error :404")

    useEffect(() =>{
        const Timer = () => {
        const clock = new Date()
        const mintues = clock.getMinutes();
        const hour = clock.getHours();
        const sec = clock.getSeconds();
        setTime(`${hour} ${mintues} ${sec}`)
        }
        Timer()
        let Duration = setInterval(Timer,1000)
        return () => clearInterval(Duration);
    },[])
    return (
    <>
    <div>{time}</div>
    </>
    )
}

export default Clock