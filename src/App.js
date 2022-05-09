import './App.css';
import { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [imageSelected, setImageSelected] = useState();

  const uploadImage = files => {
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'yuxlp3ad');

    axios.post(
      'https://api.cloudinary.com/v1_1/kryyp/image/upload/', 
      formData
    ).then(res => {
      console.log(res)
    });
  };

  return (
    <div className="App">
      <input
        type='file'
        onChange={e => {
          setImageSelected(e.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Submit</button>

    </div>
  );
}

export default App;
