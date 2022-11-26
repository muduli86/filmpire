import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";

const Pagination = ({ page, setPage, pages }) => {
  const currentPage = page;
  const theme = useTheme();
  function handlePrev() {
    setPage((prevpage) => prevpage - 1);
  }

  function handleNext() {
    setPage((prevpage) => prevpage + 1);
  }
  return (
    <>
      {pages && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant='contained'
            disabled={page === 1 ? true : false}
            color='primary'
            sx={{ magin: "30px 20px" }}
            onClick={handlePrev}
          >
            Prev
          </Button>
          <Typography
            variant='h6'
            sx={{
              margin: "0 20px !important",
              color: theme.palette.text.primary,
            }}
          >
            {currentPage}
          </Typography>
          <Button
            variant='contained'
            color='primary'
            disabled={page === pages ? true : false}
            sx={{ magin: "30px 20px" }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      )}
    </>
  );
};

export default Pagination;
