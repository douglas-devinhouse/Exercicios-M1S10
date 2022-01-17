import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Footer, Router } from './routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Router />        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
