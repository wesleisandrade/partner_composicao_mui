import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ModalMessage from './components/ModalMessage';

import './App.css';


function App() {

  const [openModal, setOpenModal] = useState(false);
  const [motivo, setMotivo] = useState<string>('');

  const handleSubimit = () => {
    setOpenModal(false);
    setMotivo('');
    alert(`O motivo do cancelamento foi: ${motivo}`);
  }

  const ModalContentTemp = () => (
    <>
      <Typography gutterBottom>
        Informe o motivo do cancelamento para podermos averiguar melhor o problema.
      </Typography>
      <TextField
        autoFocus
        margin="dense"
        label="Motivo do cancelamento"
        type="text"
        value={motivo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMotivo(e.currentTarget.value)}
        fullWidth
        variant="standard"
      />
    </>
  );

  return (
    <div className="App">
      <Button variant='contained' onClick={() => setOpenModal(true)}>Abrir Modal</Button>
      <ModalMessage
        title="Cancelar Romaneio"
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleSave={handleSubimit}
        modalContent={<ModalContentTemp />}
        saveTextButton="Salvar"
        closeTextButton="Cancelar"
      />
    </div>
  );
}

export default App;
