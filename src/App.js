import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person'

const App = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: 'sean-37', name: 'Sean', age: 37 },
      { id: 'ashley-36', name: 'Ashley', age: 36 },
      { id: 'sionainn-3', name: 'Sionainn', age: 3 },
      { id: 'saoirse-1', name: 'Saoirse', age: 1 },
    ],
  });

  const [ showPersonsState, setShowPersonsState ] = useState({
    showPersons: false,
  });

  const nameChangedHandler = (event, personIndex) => {
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];

    persons[personIndex] = person;

    setPersonsState({ persons });
  }

  const deletePersonsHandler = personsIndex => {
    const persons = [...personsState.persons];

    persons.splice(personsIndex, 1);

    setPersonsState({ persons });
  }

  const togglePersonsHandler = () => {
    setShowPersonsState({
      showPersons: !showPersonsState.showPersons
    });
  }

  let persons = null;

  if (showPersonsState.showPersons) {
    persons = personsState.persons.map(({ id, name, age }, index) => (
      <Person
        key={id}
        name={name}
        age={age}
        click={() => deletePersonsHandler(index)}
        changed={event => nameChangedHandler(event, index)}
      />
    ));
  }

  return (
    <div className="App">
      <h1>React 16 Demo</h1>
      <button onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  )
}

export default App;
