import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App font-signika w-[1440px] bg-[#F8F8F8] mx-auto">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
