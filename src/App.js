import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import AboutPage from './Pages/AboutPage/AboutPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import CareerPage from './Pages/CareerPage/CareerPage';

function App() {
  return (
    <div className="App font-signika w-[1440px] bg-[#F8F8F8] mx-auto">
      <Router>

        <Header />
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/gallery' Component={Gallery}/>
          <Route path='/aboutUs' Component={AboutPage}/>
          <Route path='/services' Component={ServicesPage}/>
          <Route path='/career' Component={CareerPage}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
