import React from 'react';
import { Paper } from '@mui/material';

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <div 
        dangerouslySetInnerHTML={{ __html: result }}
        style={{
          '& h2': {
            color: '#2c3e50',
            marginTop: '1em',
            marginBottom: '0.5em'
          },
          '& p': {
            marginBottom: '1em',
            lineHeight: '1.6'
          },
          '& ul, & ol': {
            marginBottom: '1em',
            paddingLeft: '2em'
          },
          '& li': {
            marginBottom: '0.5em'
          }
        }}
      />
    </Paper>
  );
};

export default ResultDisplay;
