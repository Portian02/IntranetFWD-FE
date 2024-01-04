// components/ExampleCarouselImage.jsx
import React from 'react';

function ExampleCarouselImage({ text }) {
  return (

    <>
      <img
      className="d-block w-100"
      src="https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp" // Aquí debes colocar la ruta de la imagen o la lógica que prefieras
      alt={text}
    />

    </>
 
    
    
  );
}

export default ExampleCarouselImage;
