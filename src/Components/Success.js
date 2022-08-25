import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import winnerAudio from "../assets/winner.mp3";

export default function Success({ isNext, initialSquares, setSquares }) {
  const playWinAudio = () => {
    new Audio(winnerAudio).play();
  };
  playWinAudio();
  const handleClick = () => {
    setSquares(initialSquares);
    
  };
  return (
    <div className="alertButton">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success" variant="filled">
          <AlertTitle>Congratulations!</AlertTitle>
          The Winner is " {`${isNext ? " Player - 1" : "Player - 2"}`} " <strong>check it out! </strong> <br />{" "}
          <br />
          <Button onClick={handleClick}>Replay</Button>
        </Alert>
      </Stack>
    </div>
  );
}
