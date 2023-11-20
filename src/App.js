import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

import ContactPage  from './pages/ContactPage';
import HomePage  from './pages/HomePage';
import CampsitesDirectoryPage  from './pages/CampsitesDirectoryPage';

function App() {
  return (
    <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
