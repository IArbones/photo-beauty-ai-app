import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className='p-4 text-center'>
      <h1 className='text-xl font-bold mb-4'>Photo Beauty AI</h1>
      <input type='file' accept='image/*' onChange={handleFileChange} />
      {preview && (
        <div className='mt-4'>
          <p className='mb-2'>Vista previa (borrosa):</p>
          <img
            src={preview}
            alt='Preview'
            style={{ filter: 'blur(6px)', maxWidth: '300px', borderRadius: '8px' }}
          />
          <div className='mt-4'>
            <a href='https://tu-link-de-gumroad' target='_blank' rel='noreferrer'>
              <button className='bg-blue-600 text-white px-4 py-2 rounded'>Desbloquear resultado</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;