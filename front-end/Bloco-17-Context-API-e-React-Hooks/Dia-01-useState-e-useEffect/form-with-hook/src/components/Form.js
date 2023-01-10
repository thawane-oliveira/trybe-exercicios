import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState();

  return (
    <form>
      <fieldset>
        <h3>Dados pessoais</h3>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="age">
          Idade
          <input
            type="text"
            id="age"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            type="text"
            id="city"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </label>
        <h3>Módulo atual</h3>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="subject"
            value="Fundamentos"
            checked={subject === 'Fundamentos'}
            onChange={({ target }) => setSubject(target.value)}
          />
        </label>
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="subject"
            value="Front-end"
            checked={subject === 'Front-end'}
            onChange={({ target }) => setSubject(target.value)}
          />
        </label>
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="subject"
            value="Back-end"
            checked={subject === 'Back-end'}
            onChange={({ target }) => setSubject(target.value)}
          />
        </label>
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="subject"
            value="Ciência da computação"
            checked={subject === 'Ciência da computação'}
            onChange={({ target }) => setSubject(target.value)}
          />
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Xablau');
        }}
      >
        Enviar dados
      </button>
    </form>
  );
}

export default Form;