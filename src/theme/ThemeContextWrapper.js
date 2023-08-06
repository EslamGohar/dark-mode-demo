import { useState, useEffect } from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'

export default function ThemeContextWrapper({ children }) {
	const [theme, setTheme] = useState(themes.dark)
	
	function changeTheme(theme) { 
		setTheme(theme)
	}
	
	useEffect(() => { 
		switch (theme) { 
			case themes.light:
				document.body.classList.add('white-content')
				break;
			case themes.dark:
			default:
				document.body.classList.remove('white-content')
				break;
		}
	}, [theme])
	
	return (
	  <div>
		  <ThemeContext.Provider value={{ theme, changeTheme }}>
			  { children }
		  </ThemeContext.Provider>
	 	</div>
  	)
}