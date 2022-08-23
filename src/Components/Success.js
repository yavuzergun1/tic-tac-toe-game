import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Success({winner, initialSquares, setSquares}) {
    const handleClick = () =>{
        setSquares(initialSquares)
    }
  return (
    <Stack sx={{ width: '100%' }} spacing={2} >
      <Alert severity="success">
        <AlertTitle>Congratulations!</AlertTitle>
        The Winner is " {winner} "  <strong>check it out! </strong> <br /> <br />
        <Button onClick={handleClick}>Replay</Button>
      </Alert>
    </Stack>
  );
}
