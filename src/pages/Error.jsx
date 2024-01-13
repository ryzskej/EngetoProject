import { Link } from 'react-router-dom'
import "./Error.css"

import dino from "../img/dino.png"

const Error = () => {
  
  return <div className='error'>
      
        <h2>404</h2>
        <p>Not found</p>
        <img src={dino} className='error-image' alt="" />
        <p><Link to="/" className='back-button'>Home</Link></p>

    </div>
}

export default Error
