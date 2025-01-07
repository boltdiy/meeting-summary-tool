import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Typography } from '@mui/material';

const FileUpload = ({ onFileUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/plain': ['.txt'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/pdf': ['.pdf']
    },
    maxSize: 100 * 1024 * 1024, // 100MB
    onDrop: onFileUpload
  });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        p: 3,
        border: '2px dashed #ccc',
        borderRadius: 2,
        textAlign: 'center',
        cursor: 'pointer',
        mb: 2
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1">
        Drag & drop files here, or click to select files
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Supported formats: .txt, .doc, .docx, .pdf (Max size: 100MB)
      </Typography>
    </Paper>
  );
};

export default FileUpload;
