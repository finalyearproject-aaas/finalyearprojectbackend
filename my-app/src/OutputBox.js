import React, { useState } from 'react';
import Loading from './Loading';

function OutputBox() {
  const [output, setOutput] = useState('whatever stage');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setOutput(value);
  }

  return (
    <div>
      {/* <Loading /> */}
      <h2>Result: </h2>
      {/* <textarea rows="3" cols="50" value={output} onChange={handleInputChange} /> */}
      <p>{output}</p>
    </div>
  );
}

export default OutputBox;