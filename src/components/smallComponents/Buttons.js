import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple,red } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  fontFamily:"Poppins",
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

export function SaveButton({onClick,children,type}) {
  return (
  
      <ColorButton  type = {type} onClick = {onClick} variant="contained">{children}</ColorButton>
     
   
  );
}