import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import drawAudio from "../assets/draw.wav";

export default function Draw({ initialSquares, setSquares }) {
  const playDrawAudio = () => {
    new Audio(drawAudio).play();
  };
  playDrawAudio();
  const handleClick = () => {
    setSquares(initialSquares);
  };
  return (
    <div className="alertButton">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="info">
          <AlertTitle>Draw!</AlertTitle>
           <strong>There is no Winner... </strong> <br />
          <Button onClick={handleClick}>Replay</Button>
        </Alert>
      </Stack>
    </div>
  );
}
