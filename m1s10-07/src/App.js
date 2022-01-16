import { useState } from 'react';
import './App.css';
import { AuthConsumer } from './components/consumer/authConsumer';

import { AuthContext } from './contexts/auth';

function App() {
  const [authenticated, setAuthenticated] = useState(false);  
  return (        
    <div className="App">      
      <header className=  "App-header">                
        <AuthContext.Provider value={{authenticated, setAuthenticated}}>
          <AuthConsumer />
        </AuthContext.Provider>        
      </header>      
    </div>
  );
}

export default App;
