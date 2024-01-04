import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FindCountry from "./pages/FindCountry";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import OneHoliday from "./components/OneHoliday";

const App = () => {

  return <BrowserRouter>
    <Routes>
        <Route path="/" element={ <SharedLayout />}>
            <Route index element={ <Home />}/>
            <Route path="/findCountry" element={ <FindCountry />}/>
            <Route path="/all-holidays/:holidayId" element={<OneHoliday />}/>
            <Route path="*" element={ <Error />}/>
        </Route>
    </Routes>
  </BrowserRouter>
}

export default App