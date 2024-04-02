import React, { useState } from 'react';
import './App.css'; // Importa tu archivo de estilos CSS

function App() {
  const [buttonSizeYes, setButtonSizeYes] = useState(100); // Estado para el tamaño del botón 'Sí'
  const [buttonSizeNo, setButtonSizeNo] = useState(100); // Estado para el tamaño del botón 'No'
  const [showInitialGif, setShowInitialGif] = useState(true); // Estado para mostrar el GIF inicial



  const handleNoButtonClick = () => {
    if (buttonSizeNo > 60) { // Límite mínimo para el tamaño del botón 'No'
       // Incrementa el tamaño del botón 'Sí'
      setButtonSizeNo(prevSize => prevSize - 10); // Decrementa el tamaño del botón 'No'
    }
    if (buttonSizeYes < 650) {
      setButtonSizeYes(prevSize => prevSize + 10);
  }
    
  };
  
  const handleYesButtonClick = () => {
    setShowInitialGif(false); // Cambia el estado para mostrar el GIF inicial
  };

  return (
    <div className="container">
      <div className='texto'>
        <h1>Hola mi niña, ¿te gustaría estar siempre conmigo? </h1>
      </div>
      <div className="buttons">
      <button 
        className="button1"
        style={{ width: `${buttonSizeYes}px`, height: `${buttonSizeYes}px` }}
        onClick={handleYesButtonClick}
      >
        Sí
      </button>
      <button 
        className="button2"
        style={{ width: `${buttonSizeNo}px`, height: `${buttonSizeNo}px` }}
        onClick={handleNoButtonClick}
      >
        No
      </button>
      </div>
      <div className='gif-container'>
      {showInitialGif ? (
        <img src={'https://i.pinimg.com/originals/db/4e/d9/db4ed9ce59f02f30cc60b3fab6630c95.gif'} alt="GIF inicial" />
      ) : (
        <img src={'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mochi-peach-cat-1/sticker_1.gif?11c57a41a817e51942be916683f7082f'} alt="GIF modificado" />
      )}
    </div></div>
  );
}

export default App;
