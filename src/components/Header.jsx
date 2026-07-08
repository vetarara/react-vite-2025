import { useState } from "react";
import logo from '/favicon.svg'

export default function Header() {
    const [now, setNow ] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000)
    
    return (
        <header>
            <img src={logo} alt={"Vite"}></img>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>

    )
}