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
    }
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
