/* eslint-disable react/jsx-no-undef */

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import './App.css';


import React from 'react'




function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <ScrollToTop/>
                <Routes>
                    <Route path={"/portfolio"} exact element={<Home/>}/>
                    <Route path={"/projects"} exact element={<Projects/>}/>
                    <Route path={"/skills"} exact element={<Skills/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>

    )

}

export default App;