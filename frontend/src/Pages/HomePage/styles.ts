import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const StyledCard = styled.div`
  .MuiCard-root {
    background-color: transparent;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.7);
  }
`

export const Obs = styled.div`
  .spotify-premium {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`
