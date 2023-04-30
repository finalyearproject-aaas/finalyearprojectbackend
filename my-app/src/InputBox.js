import React, { useState } from 'react';
import Loading from './Loading';
import OutputBox from './OutputBox';

function InputBox() {
  const [image, setImage] = useState('');

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      
      // Send the image to the backend
      fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Handle the response from the backend
      })
      .catch(error => {
        // Handle errors
      });

      console.log("sent request")
    };
  
    reader.readAsDataURL(selectedImage);
    }
    
  

  return (
    <div>
      <h2>Insert fundus image to check for Diabetic Retinopathy</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
            <div>
            <img src={image} alt="Uploaded" width="300" />
            </div>
            <div>
                <OutputBox />
            </div>
        </div>
      )}
    </div>
  );
}

export default InputBox;
