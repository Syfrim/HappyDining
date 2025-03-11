import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Menu from './sections/Menu';
import Home from './sections/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default App;
