import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Photo Beauty AI</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <p>Vista previa (borrosa):</p>
          <img
            src={preview}
            alt="Preview"
            style={{ filter: 'blur(6px)', maxWidth: '300px', borderRadius: '8px' }}
          />
          <div style={{ marginTop: '20px' }}>
            <a href="https://iarbonesc.gumroad.com/l/sqjwm" target="_blank" rel="noreferrer">
              <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px' }}>
                Desbloquear resultado
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
