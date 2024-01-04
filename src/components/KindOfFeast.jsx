import data from "../dataKindOfFeast"       
import "./KindOfFeast.css"

const KindOfFeast = () => {

  return <div className="all-feast">
      
    {data.map( (oneFeast) => {
        const {id, image, name, description} = oneFeast
        return <div key={id} className="one-feast">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    })}

    </div>
}

export default KindOfFeast
