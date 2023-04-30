import React, { useState } from 'react';
import Loading from './Loading';
import OutputBox from './OutputBox';
import './App.css';


function InputBox() {
  const [image, setImage] = useState('');

  const [pred, setPred] = useState('a');


  const formData = new FormData();

  const getResult = (pred) => {
    if (Number(pred)>0){
      return "Diabetic Retinopathy Detected"
    }
    else{
    return " No Diabetic Retinopathy Detected"
  }}

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    formData.append('image', selectedImage)

    reader.onloadend = () => {
      setImage(reader.result);
      
      // console.log("image",reader.result)

      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPred(data["prediction"][0])

        console.log("data",data)
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
    <div className="viewport">
      <div className="header" >NETRA</div>
      <h2 className="head">Insert fundus image to check for Diabetic Retinopathy</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />

    <div className="row">
      {/* <Loading /> */}
      {image && <img className='image' src={image} alt="Uploaded" width="300" />}
      {pred!="a" && <h2>Result: </h2>}
      {/* {pred!="a" && <p>{Number(pred)}</p>} */}
      {pred!="a" && <p className='result' >{getResult(pred)}</p>}
    </div>
    </div>
  );
}

export default InputBox;
