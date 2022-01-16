import { useState } from 'react';
import './App.css';
import { AuthConsumer } from './components/consumer/authConsumer';

import { AuthContext } from './contexts/auth';
import { ThemeContext } from './contexts/theme';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [theme, setTheme] = useState('ligth');
  return (        
    <div className="App">
      <ThemeContext.Provider value={{theme, setTheme}}>
        <header className=  "App-header">                
          <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            <AuthConsumer />
          </AuthContext.Provider>        
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
