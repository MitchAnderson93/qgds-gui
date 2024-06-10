import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#022A50');
  const [theme, setTheme] = useState('light-alt');

  const handleColorChange = (event) => {
    setColor(event.target.value);
    document.documentElement.style.setProperty('--qld-color-default-color-light-crest-fill', event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const copyToClipboard = () => {
    const cssVar = `--qld-color-default-color-light-crest-fill: ${color};`;
    navigator.clipboard.writeText(cssVar);
    alert('CSS variable copied to clipboard: ' + cssVar);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Customise template</h2>
        <div className="color-picker">
          <label htmlFor="color">Text</label>
          <input
            type="color"
            id="color"
            name="color"
            value={color}
            onChange={handleColorChange}
          />
          <span>{color}</span>
        </div>
        <div className="theme-selector">
          <label>Preview setting</label>
          <select value={theme} onChange={handleThemeChange}>
            <option value="dark">Dark</option>
            <option value="dark-alt">Dark Alt</option>
            <option value="light-alt">Light Alt</option>
          </select>
        </div>
        <button onClick={copyToClipboard}>Copy CSS Variable</button>
      </div>
      <div className={`preview-area ${theme}`}>
        <p>Preview Area</p>
        <div className="css-variable">{`--qld-color-default-color-light-crest-fill: ${color};`}</div>
      </div>
    </div>
  );
}

export default App;
