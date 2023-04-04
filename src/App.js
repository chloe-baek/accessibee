// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftV from './components/LeftV';
import RightV from './components/RightV';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-screen'>
      <img
        src='img/logo.png'
        alt='logo'
        className='w-1/6 h-auto mx-auto py-5'
      />
      <Header />
      <RightV />
      <LeftV />
      <Footer />
    </div>
  );
}

export default App;
