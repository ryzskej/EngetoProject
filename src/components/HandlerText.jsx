/* přepínač textů pomocí jednotlivých tlačítek */
import { useState } from "react";
import data from "../data.json"
import "./HandlerText.css"

const HandlerText = () => {

        // vybere pole objektů jednotlivých druhů svátků
        const source = data.info

        // ve výchozím nastavení vybere první text (k prvnímu tlačítku)
        const [textInfo, setTextInfo] = useState(source[0].text)

  return <div className="handler-text">
      
        {source.map( (oneObject) => {
            const { id, name, text} = oneObject
            return <div key={id} className="all-buttons">
                    <p className="one-button" onClick={ () => setTextInfo(text)}>{name}</p>
                    </div>
        })}
        
        <p className="text-info">{textInfo}</p>

    </div>
}

export default HandlerText
