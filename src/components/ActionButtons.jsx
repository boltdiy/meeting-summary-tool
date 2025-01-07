import React from 'react';
import { Button, Stack } from '@mui/material';

const ActionButtons = ({ onAction, disabled }) => {
  const buttons = [
    {
      label: 'Quick Summary',
      action: 'summary',
      prompt: `
        Please provide a concise and clear summary of this meeting transcript, highlighting the main points discussed.
        Structure your response with:
        - A brief overview section
        - Key discussion points
        - Main conclusions
        Use appropriate HTML headings and paragraphs for clear formatting.
      `
    },
    {
      label: 'Project Scope',
      action: 'scope',
      prompt: `
        Based on this meeting transcript, please provide a detailed project scope including:
        - Project objectives
        - Deliverables
        - Timeline implications
        - Technical requirements
        Format the response in clean HTML with clear sections and bullet points where appropriate.
      `
    },
    {
      label: 'Action Items',
      action: 'actions',
      prompt: `
        Please analyze this meeting transcript and extract all action items, tasks, and assignments mentioned.
        Format them as a clear HTML list with:
        - Task description
        - Responsible parties
        - Deadlines (if mentioned)
        - Priority level (if implied)
        Use appropriate HTML tags for structured, easy-to-read output.
      `
    }
  ];

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      {buttons.map((button) => (
        <Button
          key={button.action}
          variant="contained"
          disabled={disabled}
          onClick={() => onAction(button.action, button.prompt)}
          sx={{ flex: 1 }}
        >
          {button.label}
        </Button>
      ))}
    </Stack>
  );
};

export default ActionButtons;
