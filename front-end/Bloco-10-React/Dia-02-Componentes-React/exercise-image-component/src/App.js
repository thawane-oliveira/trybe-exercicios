import React from 'react';
import Image from './Image';
import cat from './cat.jpeg';

function App() {
  return (
    <div>
      <Image caminho={ cat } texto="Cute cat staring" />
    </div>
  );
}

export default App;
