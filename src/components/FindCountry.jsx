/* komponenta, ve které se fetchnou data podle uživatelem zadaných údajů. Data se poté vypíší do stránky pomocí funkce map */
import "./FindCountry.css"
import { useState, useRef } from "react";

const FindCountry = () => {
  
    // do proměnné currentYear uloží aktuální rok
    const d = new Date()
    const currentYear = d.getFullYear()
  
    // holidays: pole objektů fetchnutých svátků
    // MPZ: uživatelem vložená zkratka země (2 písmena) do inputu
    // year: rok, ke kterému chce uživatel svátky vypsat (pokud nevyplní, )
    // numberOfHolidays: vypíše počet svátků (číslo)
    // clearAllResult: pokud si uživatel vypíše správný vstup, a poté zadá špatný, vyčistí daný <div>
    // nameCountry: zobrazí název dané země  
    const [holidays, setHolidays] = useState([])
    const [MPZ, setMPZ] = useState("")
    const [year, setYear] = useState(currentYear)
    const [numberOfHolidays, setNumberOfHolidays] = useState(0)
    const [clearAllResult, setClearAllResults] = useState(false)
    const [NameCountry, setNameCountry] = useState("")

    // vytvoření reference ke dvěma inputům (k promazání) a divu "bez výsledku". 
    const inputCountry = useRef()
    const inputYear = useRef()
    const noResult = useRef()

    // funkce k fetchnutí pole objektů svátků v dané zemi
    const findOneCountry = (e) => {
          e.preventDefault();
          
          // vyčistí value v políčku input
          inputCountry.current.value = ""
          inputYear.current.value = ""

          fetch(`https://calendarific.com/api/v2/holidays?api_key=vlHaUca7CG8XU7YZFzNwajeYI6LspHLu&country=${MPZ}&year=${year}`)
            .then((response) => response.json())
            .then((data) => data.response.holidays)
            .then((result) => {
              
                // pokud uživatel zadá správnou zkratku země
                if(result){
                    setHolidays(result);
                    setNameCountry(result[0].country.name);
                    setNumberOfHolidays(`Number of holidays: ${result.length}`);
                    setClearAllResults(false);
                    noResult.current.textContent = "";
                    console.log(result);

                // pokud uživatel zadá nevalidní zkratku země
                } else {
                    noResult.current.textContent = "No results. Incorrect input.";
                    setNumberOfHolidays("")
                    setClearAllResults(true)
                    setNameCountry("")
                    }
                })

            // catchnutí v případě chyby
            .catch( (error) => noResult.current.textContent = `Chyba! ${error}`)
    }


  return <div>        
      <form className="form-input">

          <input type="text" placeholder="Insert 2 digit country code" className="inputCountry" ref={inputCountry}  onChange={ (e) => setMPZ(e.target.value)}/>
          <a href="https://en.wikipedia.org/wiki/ISO_3166-1#Codes" className="whatIs" target="_blank" rel="noreferrer">What is country code?</a>

          <input type="number" placeholder="Year to filter" className="inputYear" ref={inputYear} onChange={ (e) => setYear(e.target.value)}/>

          <button onClick={findOneCountry}>Send</button>
      </form>

      <p className="country">{clearAllResult || `Filtered results for country ${NameCountry} to year ${year}`}</p>
      <p className="number-of-holidays">{clearAllResult || numberOfHolidays ? numberOfHolidays : ""}</p>
      <p className="no-result" ref={noResult}></p>

      <div className="all-results">

          {/* pokud uživatel zadá správné MPZ, provede se výpis, pokud špatné MPZ, tato sekce se nezobrazí */ }
          {clearAllResult || holidays.map( (oneHoliday, index) => {
            const {name, description, date, primary_type} = oneHoliday;
            return <div key={index} className="one-result">
                <h2>{name}</h2>
                <p>{date.datetime.day}.{date.datetime.month}.{date.datetime.year}</p>
                <p>{primary_type}</p>
                <p>{description}</p>
                
            </div>
          })}
      </div>

  </div>
}

export default FindCountry
