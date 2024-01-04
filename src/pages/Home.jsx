import { useEffect } from "react"
import "./Home.css"
import HandlerText from "../components/HandlerText"
import KindOfFeast from "../components/KindOfFeast"
import data from "../data.json"


const Home = () => {

  const random = Math.floor(Math.random() * 5)
  const randomText = data.randomText[random]

  return <div className="header-home">
        <h1>Holidays accros the countrys</h1>
        <p className="random-text">{randomText}</p>
        <KindOfFeast />
        <HandlerText />
    </div>
}

export default Home
