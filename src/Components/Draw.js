import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import drawAudio from "../assets/draw.wav";

export default function Draw({initialSquares, setSquares}) {
  const playDrawAudio = () => {
    new Audio(drawAudio).play();
  };
  playDrawAudio()
    const handleClick = () =>{
        setSquares(initialSquares)

    }
  return (
    <Stack sx={{ width: '100%' }} spacing={2} >
      <Alert severity="info">
  <AlertTitle>Draw</AlertTitle>
  There is no Winner — <strong>Try Again!</strong> <br />
  <Button onClick={handleClick}>Replay</Button>
</Alert>
    </Stack>
  );
}

