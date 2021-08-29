import React from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Practices from './components/Practices';
import NewsSlide from './components/NewsSlide'
import ServicesView from './Screens/ServicesView';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <main>
        <Banner/>
        <ServicesView/>
        <Practices/>
        <NewsSlide/>        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
