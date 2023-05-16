import React, { useState } from 'react';
import './index.css';
import DisplayWeather from './Components/DisplayWeather';

function App() {
  const [inptLocation, setInptLocation] = useState('');
  const [searchPage, setSearchPage] = useState(false);
  const [preInpt, setPreInpt] = useState('')

  function submitForm(event) {
    event.preventDefault();
    setSearchPage(true);
    setInptLocation(preInpt)
    setPreInpt('');
  }

  function turnBack() {
    setSearchPage(false);
  }

  return (
    <div className="container">
      <div className="wrapper">
        {searchPage ? (
          <DisplayWeather inptLocation={inptLocation} turnBack={turnBack}/>
        ) : (
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Seoul"
              value={preInpt}
              onChange={event => setPreInpt(event.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
