import { useState, useContext } from 'react';
import { ThemeContext, themes } from './context/ThemeContext';
import ToggleTheme from './components/toggleTheme';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const { changeTheme } = useContext(ThemeContext)
  
  const handleToggleTheme = () => { 
    setDarkMode(!darkMode)
    changeTheme(darkMode ? themes.light : themes.dark)
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-warning'>Dark/Light Mode</h1>
      </header>
      
      <ToggleTheme toggleTheme={handleToggleTheme} />
  
      <footer className="center footer">
          <a href="https://github.com/EslamGohar" rel='noreferrer noopener' target='_blank'>
            Designed by: Eslam Gohar
          </a>
      </footer>
    </div>
  );
}

export default App;
