import Login from "./components/login/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import './components/login/Login.css'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import './App.css'
import AboutUs from "./components/aboutus/AboutUs.jsx";
import Products from "./components/products/Products.jsx";


export default App

function App() {


    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/About' element={<AboutUs/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
