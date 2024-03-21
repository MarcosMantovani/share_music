import styled from 'styled-components'

export const StyledMui = styled.div`
  .MuiIconButton-sizeLarge,
  .MuiIconButton-sizeMedium,
  .MuiIconButton-sizeSmall {
    border: 2px solid #8b35bd;
    color: #8b35bd;
  }

  .MuiCard-root {
    background-color: transparent;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.7);
  }

  .description {
    margin-top: 24px;
    padding: 16px 8px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  }

  .mediaCard {
    width: 100%;
    height: 100%;
  }

  .MuiLinearProgress-colorPrimary {
    border-radius: 8px;
    background-image: linear-gradient(
      45deg,
      rgba(255, 0, 0, 0.5),
      rgba(139, 53, 189, 0.8)
    );
  }

  .MuiLinearProgress-bar1Determinate {
    background-color: #8b35bd;
  }

  .playback {
    padding-top: 24px;
    margin: 0 auto;
    display: grid;
    column-gap: 24px;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
`
