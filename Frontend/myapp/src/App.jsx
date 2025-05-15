import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home/home"
import Login from "./pages/login/login"
import SignUp from "./pages/signup/signUp"
import './index.css'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App