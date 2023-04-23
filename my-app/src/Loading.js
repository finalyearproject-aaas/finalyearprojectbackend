import React, { useState, useEffect } from 'react';
import OutputBox from './OutputBox';
import Spinner from './spinner.gif';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <img src={Spinner} alt="Loading Spinner" width="100"/>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
            <p>Analysis complete</p>
            <OutputBox />
        </div>
      )}
    </div>
    
  );
}

export default Loading;
