import "./OneHoliday.css"
import { useParams } from "react-router-dom";
import { useContext, useState } from 'react';
import {HolidayContext} from "./FilterCountry"

const OneHoliday = () => {

  const data = useContext(HolidayContext)
  const [result, setResult] = useState("")

  useState( () => {
    setResult(data)
  }, [data])
  
  console.log(data);
  console.log(result);

  return <div>

    </div>
}

export default OneHoliday