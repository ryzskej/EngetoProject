/* různé zajímavosti svátků, které se při každém načtení stránky změní */
import "./RandomText.css"
import data from "../data.json"
import { useEffect, useState } from "react"

const RandomText = () => {

    // vybere náhodný text a pomocí useState jej nastaví do randomText
    const chooseRandomText = data.randomText[Math.floor(Math.random() * data.randomText.length)]
    const [randomText, setRandomText] = useState(chooseRandomText)

    useEffect(() => {
        // vytvoří setInterval a každých 5 vteřin změní hlášku. K dispozici pouze po prvním navštívení stránky
        const interval = setInterval(() => {
            setRandomText(chooseRandomText);
        }, 1000);
     
        // promaže setInterval
        return () => clearInterval(interval);
    }, [chooseRandomText]);

return <div>

        <p className="random-text">{randomText}</p>

    </div>
}

export default RandomText
