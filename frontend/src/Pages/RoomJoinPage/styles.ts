import { Typography, Card } from '@mui/material'
import styled from 'styled-components'

export const PinkText = styled(Typography)`
  color: #9c27b0;
`

export const StyledCard = styled.div`
  .MuiCard-root {
    background-color: transparent;
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    );
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.7);
  }

  .MuiInputBase-input {
    color: #8b35bd;
  }
`
