import { Link } from 'react-router-dom'
import { Grid, Button, Typography, Card } from '@mui/material'

import { StyledCard } from './styles'

const Info = () => {
  return (
    <StyledCard>
      <Card>
        <Grid container className="purple card">
          <Grid item xs={12} marginBottom={3} textAlign="center">
            <Typography component="h4" variant="h4">
              O que é o Share SpotifyMusic?
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={2} textAlign="center">
            <Typography variant="h5">
              Você já teve a experiência de ter um amigo que sempre quer
              controlar a playlist em todas as festas?
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={2} textAlign="center">
            <Typography variant="h6">
              Se sim, então o Share SpotifyMusic é perfeito para você!
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={1} textAlign="center">
            <Typography variant="h6">
              Com o Share SpotifyMusic, você pode deixar todos os seus amigos
              participarem da diversão musical.
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={3} textAlign="center">
            <Typography variant="h6">
              Basta criar salas e compartilhar sua playlist em tempo real, dando
              a todos a chance de decidir se desejam pular para a próxima música
              ou pausar a reprodução a qualquer momento.
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={2} textAlign="center">
            <Typography variant="h5">
              Coloque o Controle na Pista! Compartilhe Sua Batida, Deixe Todos
              Dançarem!
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={3} textAlign="center">
            <Typography color="red" variant="body1">
              Requer Spotify Premium
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button
              color="secondary"
              variant="outlined"
              to="/"
              component={Link}
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </StyledCard>
  )
}

export default Info
