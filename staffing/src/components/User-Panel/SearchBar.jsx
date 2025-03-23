import React from "react";
import { TextField, Button, Box, Grid } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <TextField label="Search Jobs" variant="outlined" fullWidth />
      <TextField label="Location" variant="outlined" fullWidth />
      <TextField label="Salary Range" variant="outlined" fullWidth />
      <Button variant="contained" color="primary" onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
