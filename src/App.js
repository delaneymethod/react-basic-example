import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Sean', age: 37 },
      { name: 'Ashley', age: 36 },
      { name: 'Sionainn', age: 3 },
      { name: 'Saoirse', age: 1 },
    ]
  });

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 37 },
        { name: 'Ashley D', age: 36 },
        { name: 'Sionainn D', age: 3 },
        { name: 'Saoirse D', age: 1 },
      ]
    });
  }

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 37 },
        { name: 'Ashley', age: 36 },
        { name: 'Sionainn', age: 3 },
        { name: 'Saoirse', age: 1 },
      ]
    });
  }

  // Scoped styling
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <h1>React 16 Demo</h1>
      <button
        style={style}
        onClick={switchNameHandler.bind(this, 'Sean!!')}
      >
        Switch Name
      </button>
      {personsState.persons.map(({ name, age }) => (
        <Person
          name={name}
          age={age}
          changed={nameChangedHandler}
        />
      ))}
    </div>
  )
}

export default App;
