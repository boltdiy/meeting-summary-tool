import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      multiline
      rows={6}
      variant="outlined"
      placeholder="Paste your meeting transcript here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
};

export default TextInput;
