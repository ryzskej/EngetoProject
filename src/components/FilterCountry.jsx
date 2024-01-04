import "./FilterCountry.css"
import OneHoliday from "./OneHoliday";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";

export const HolidayContext = createContext();

const FindCountry = () => {

    // holidays: pole objektů fetchnutých svátků
    // MPZ: uživatelem vložená zkratka země (2 písmena) do inputu
    // numberOfHolidays: vypíše počet svátků (číslo)
    // clearAllResult: pokud si uživatel vypíše správný vstup, a poté zadá špatný, vyčistí daný <div>
    // nameCountry: zobrazí název dané země  
    const [holidays, setHolidays] = useState([])
    const [MPZ, setMPZ] = useState("")
    const [numberOfHolidays, setNumberOfHolidays] = useState("")
    const [clearAllResult, setClearAllResults] = useState(false)
    const [NameCountry, setNameCountry] = useState("")

    // funkce k fetchnutí pole objektů svátků v dané zemi
    const findOneCountry = (e) => {
       e.preventDefault();
       
       // vyčistí value v políčku input
       document.querySelector(".input").value = ""

          fetch(`https://calendarific.com/api/v2/holidays?api_key=vlHaUca7CG8XU7YZFzNwajeYI6LspHLu&country=${MPZ}&year=2019`)
            .then((response) => response.json())
            .then((data) => data.response.holidays)
            .then((result) => {
              
              // pokud uživatel zadá správnou zkratku země
              if(result){
                setHolidays(result);
                setNameCountry(result[0].country.name);
                setNumberOfHolidays(`Number of holidays: ${result.length}`);
                setClearAllResults(false)
                document.querySelector(".no-result").textContent = "";
              // pokud uživatel zadá nevalidní zkratku země
              } else {document.querySelector(".no-result").textContent = "Bez výsledku"; 
                    setNumberOfHolidays("")
                    setClearAllResults(true)
                    setNameCountry("")
                  }
              })
    }


    return <div>        
      <form className="form-input">
        <input className="input" type="text" placeholder="Vlož MPZ dané země" onChange={ (e) => setMPZ(e.target.value)}/>
        <button onClick={findOneCountry}>Odešli k získání dat</button>
      </form>

      <p className="country">{NameCountry}</p>
      <p className="number-of-holidays">{numberOfHolidays}</p>
      <p className="no-result"></p>

      <div className="all-results">
          {/* pokud uživatel zadá správné MPZ, provede se výpis, pokud špatné MPZ, nezobrazí se */ }
          {clearAllResult || holidays.map( (oneHoliday, index) => {
            const {name, description} = oneHoliday;
            return <div key={index} className="one-result">
                    <HolidayContext.Provider value={"value"}>
                        <OneHoliday />
                    </HolidayContext.Provider>
                <h2>{name}</h2>
                <p>{description}</p>
                <Link to={`/all-holidays/${index}`}>Více informací</Link>
                
            </div>
          })}
      </div>

    </div>
}

export default FindCountry
