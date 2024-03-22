import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Grid, Button, ButtonGroup, Typography, Card } from '@mui/material'

import spotifyPremium from '../../assets/media/spotify-premium.png'

import { Image, Obs, StyledCard } from './styles'

const HomePage = () => {
  const [roomCode, setRoomCode] = useState('')

  useEffect(() => {
    fetch('/api/user-in-room')
      .then((response) => response.json())
      .then((data) => {
        setRoomCode(data.code)
      })
  }, [])

  return (
    <>
      {roomCode ? (
        <Navigate to={`/room/${roomCode}`} replace={true} />
      ) : (
        <>
          <Grid container justifyContent={'center'}>
            <StyledCard>
              <Card>
                <Grid item container padding={2} xs={12}>
                  <Grid item xs={12} textAlign="center">
                    <Typography className="purple" variant="h3" component="h1">
                      Share SpotifyMusic
                    </Typography>
                  </Grid>
                  <Grid item xs={12} textAlign="center">
                    <Typography className="purple" variant="body1">
                      Coloque o Controle na Pista! Compartilhe Sua Batida, Deixe
                      Todos Dançarem!
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </StyledCard>
            <Grid item xs={12} marginTop={4} textAlign="center">
              <ButtonGroup color="primary">
                <Button
                  variant="outlined"
                  color="secondary"
                  to="/join"
                  component={Link}
                >
                  Join a Room
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  to="/info"
                  component={Link}
                >
                  Info
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  to="/create"
                  component={Link}
                >
                  Create a Room
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Obs>
            <Grid container className="spotify-premium">
              <Grid
                item
                xs={12}
                textAlign="center"
                marginTop={2}
                alignSelf={'center'}
              >
                <Typography className="spotifyText" variant="h4" component="h2">
                  Precisa de:
                </Typography>
              </Grid>
              <Grid item xs={12} height={100} textAlign="center">
                <Image src={spotifyPremium} />
              </Grid>
            </Grid>
          </Obs>
        </>
      )}
    </>
  )
}

export default HomePage
