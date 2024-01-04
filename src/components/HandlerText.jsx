import { useState } from "react";
import data from "../data.json"
import "./HandlerText.css"

const HandlerText = () => {

    const source = data.info

    const [textInfo, setTextInfo] = useState(source[0].text)

  return <div className="handler-text">
      
        {source.map( (oneObject, index) => {
            const {id, name, text} = oneObject
            return <div key={index} className="all-buttons">
                <p className="one-button" onClick={ () => setTextInfo(text)}>{name}</p>
            </div>
        })}
        <p className="text-info">{textInfo}</p>

    </div>
}

export default HandlerText
