import { Modal, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

const MovieTrailer = ({ videos, open, setOpen }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  debugger;
  return (
    <Modal
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      {videos?.results?.length > 0 && (
        <iframe
          autoPlay
          style={{
            width: "50%",
            height: "50%",
            ...(smDown && {
              width: "80%",
              height: "50%",
            }),
          }}
          frameBorder='0'
          title='Trailer'
          src={`https://youtube.com/embed/${videos.results[0].key}`}
          allow='autoplay'
        />
      )}
    </Modal>
  );
};

export default MovieTrailer;
