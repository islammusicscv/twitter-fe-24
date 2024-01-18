import Home from "./pages/Home";
import './App.css'
import Make from "./pages/Make.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register.tsx";
import Wrapper from "./components/Wrapper.tsx";
import User from "./pages/User.tsx";

function App() {
  return (
    <>
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/make'} element={<Make/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/users'} element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </Wrapper>
    </>
  )
}

export default App
