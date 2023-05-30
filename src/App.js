import React from 'react'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Kola from "./assets/images/kola.jpg";
import Main from './component/Main';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom"
import Faq from './pages/Faq';
import Help from './pages/Help';
import Clients from './pages/Clients';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("mode")) || false)

  React.useEffect(() => {
    localStorage.setItem("mode", darkMode)
  }, [darkMode])
  // localStorage,localStorage,cookie;
  const basket = [
    { title: "olma", id: 1 },
    { title: "olma", id: 2 },
    { title: "olma", id: 3 },
  ];
  const done = true;
  localStorage.setItem("bajarildi", done);
  const donee = JSON.parse(localStorage.getItem("hhhhh"));
  console.log(donee)

  // Outlet

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        {/* protectedRoute */}
        <Route path="contact" element={<Contact />}>
          <Route path='faq' element={<Faq />} />
          <Route path='help' element={<Help />} >
            <Route path='clients' element={<Clients />} />
          </Route>
        </Route>

      </Routes>
   

    </div>
  )
}

export default App;


// 0dan 450px mobile first
// 450px 800pxgacha tablet
// 800px 1280px; makbook
// 1280px dan katta.noutbuk va katta razmerlari

