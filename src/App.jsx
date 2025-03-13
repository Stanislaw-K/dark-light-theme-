import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {

  // manage the theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  //
  const toggleTheme = () => {
    setTheme((pervTheme) => (pervTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <div className="app_container">
        <h1 className="app_title">
          Switcher theme
        </h1>
        <p className='app_des'>Toggle between light and dark mode</p>
        <label className="toggle_switch">
          <input type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme} />
          <span className='slider'></span>
        </label>
      </div>
    </>
  )
}

export default App
