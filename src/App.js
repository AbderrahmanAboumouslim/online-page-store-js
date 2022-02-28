import './App.css';
import Hero from './components/hero/Hero';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
