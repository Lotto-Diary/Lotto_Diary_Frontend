import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <AuthProvider> 
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;