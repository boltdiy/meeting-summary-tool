import React, { useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import FileUpload from './components/FileUpload';
import TextInput from './components/TextInput';
import ActionButtons from './components/ActionButtons';
import ResultDisplay from './components/ResultDisplay';
import { generateResponse } from './services/gemini';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (acceptedFiles) => {
    try {
      const file = acceptedFiles[0];
      if (file) {
        const content = await file.text();
        setText(content);
      }
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Error reading file. Please try again.');
    }
  };

  const handleAction = async (action, prompt) => {
    if (!text.trim()) {
      alert('Please provide some text to analyze');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const response = await generateResponse(prompt, text);
      setResult(response);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Meeting Summary Tool
      </Typography>
      
      <FileUpload onFileUpload={handleFileUpload} />
      <TextInput value={text} onChange={setText} />
      <ActionButtons onAction={handleAction} disabled={!text.trim() || loading} />
      
      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      
      <ResultDisplay result={result} />
    </Container>
  );
}

export default App;
