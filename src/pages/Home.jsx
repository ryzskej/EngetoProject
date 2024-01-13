import "./Home.css"
import RandomText from "../components/RandomText"
import KindOfFeast from "../components/KindOfFeast"
import HandlerText from "../components/HandlerText"

const Home = () => {

  return <div className="header-home">
        <h1>Holidays accros the countrys</h1>
        <RandomText />
        <KindOfFeast />
        <HandlerText />
    </div>
}

export default Home
