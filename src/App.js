import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import AboutPage from './Pages/AboutPage/AboutPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import BlogDetailPage1 from './Pages/BlogPage/BlogDetailPage1';
import BlogDetailPage2 from './Pages/BlogPage/BlogDetailPage2';
import BlogDetailPage3 from './Pages/BlogPage/BlogDetailPage3';

function App() {
  return (
    <div className="App font-signika w-[1440px] bg-[#F8F8F8] mx-auto">
      <Router>

        <Header />
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/gallery' Component={Gallery}/>
          <Route path='/aboutUs' Component={AboutPage}/>
          <Route path='/blogs' Component={BlogPage}/>
          <Route path='/blogs/blogDetails1' Component={BlogDetailPage1}/>
          <Route path='/blogs/blogDetails2' Component={BlogDetailPage2}/>
          <Route path='/blogs/blogDetails3' Component={BlogDetailPage3}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
