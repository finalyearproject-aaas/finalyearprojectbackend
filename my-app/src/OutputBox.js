import React, { useState,useEffect } from 'react';
import Loading from './Loading';

function OutputBox(props) {
  const [output, setOutput] = useState("Stage");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setOutput(value);
  }
  useEffect(() => {
    console.log("useeffect triggered")
    setOutput(props.prediction);
  }, [props.prediction]);

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