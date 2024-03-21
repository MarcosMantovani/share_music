import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { TextField, Button, Grid, ButtonGroup, Card } from '@mui/material'

import { PinkText, StyledCard } from './styles'

const RoomJoinPage = () => {
  const [roomCode, setRoomCode] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.target.value)
  }

  const roomButtonPressed = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: roomCode
      })
    }
    fetch('/api/join-room', requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${roomCode}`, { replace: true })
        } else {
          setError('Room not found.')
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <StyledCard>
      <Card>
        <Grid container padding={3} textAlign="center">
          <Grid item xs={12}>
            <PinkText marginBottom={2} variant="h4">
              Join a Room
            </PinkText>
          </Grid>
          <Grid item xs={12} marginBottom={2}>
            <TextField
              focused
              error={error ? true : false}
              color="secondary"
              label="Code"
              placeholder="Enter a Room Code"
              value={roomCode}
              helperText={error}
              variant="outlined"
              onChange={handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup>
              <Button
                variant="outlined"
                color="secondary"
                onClick={roomButtonPressed}
              >
                Enter Room
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                to="/"
                component={Link}
              >
                Back
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Card>
    </StyledCard>
  )
}

export default RoomJoinPage
