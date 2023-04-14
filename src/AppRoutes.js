import React from 'react';
import { Landing, About, Experience, Services, Coverage, Publications, Contact, Footer } from './components';

import { Route, Routes } from 'react-router-dom';

function AppRoutes() {

  return (
    <div className="App-Routes">
      <Routes>
        <Route path='/' element={<>
          <Landing />
          <About />
          <Experience />
          <Services />
          <Coverage />
          <Publications />
          <Contact />
          <Footer />
        </>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;