import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className='flex h-[96vh] m-5'>
        <Nav />
        <Main />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
