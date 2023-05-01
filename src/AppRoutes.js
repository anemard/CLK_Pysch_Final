import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Landing, Nav, About, Experience, Interests, Services, Coverage, Publications, Contact, Footer, SignIn } from './components';

import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
  let [admin, setAdmin] = useState([])

  const fetchAdmin = async () => {
    const { data } = await axios.get('http://localhost:8080/api/admins')
    let data2 = data[0]
    setAdmin(data2)
  }

  console.log(admin)

  useEffect(() => {
    fetchAdmin()
  }, [])

  return (
    <div className="App-Routes">
      <Routes>
        <Route path='/' element={<>
          <Landing />
          <Nav />
          <About />
          <Experience />
          <Interests />
          <Services />
          <Coverage />
          <Publications />
          <Contact />
          <Footer />
        </>} />
        <Route path='/admin' element={<SignIn admin={admin} />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;