import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SearchHolidayByCountry from "./pages/SearchHolidayByCountry";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";  

const App = () => {

  return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <SharedLayout />}>
                <Route index element={ <Home />}/>
                <Route path="/searchHolidayByCountry" element={ <SearchHolidayByCountry/>}/>
                <Route path="*" element={ <Error />}/>
            </Route>
        </Routes>
  </BrowserRouter>
}

export default App