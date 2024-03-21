import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Collapse,
  Alert,
  Card
} from '@mui/material'

import { StyledMui } from './styles'

type CreateRoomPageProps = {
  update?: boolean
  votesToSkip?: number
  guestCanPause?: boolean
  roomCode?: string | null
}

const CreateRoomPage = ({
  update = false,
  votesToSkip: votesToSkipProps = 2,
  guestCanPause: guestCanPauseProps = true,
  roomCode = null
}: CreateRoomPageProps) => {
  const [guestCanPause, setGuestCanPause] = useState(guestCanPauseProps)
  const [votesToSkip, setVotesToSkip] = useState(votesToSkipProps)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const title = update ? 'Update Room' : 'Create Room'

  const handleVotesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVotesToSkip(Number(e.target.value))
  }

  const handleguestCanPauseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestCanPause(e.target.value === 'true')
  }

  const handleRoomButtonPressed = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause
      })
    }
    fetch('/api/create-room', requestOptions)
      .then((response) => response.json())
      .then((data) => navigate(`/room/${data.code}`, { replace: true }))
  }

  const handleUpdateButtonPressed = () => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
        code: roomCode
      })
    }
    fetch('/api/update-room', requestOptions).then((response) => {
      if (response.ok) {
        setSuccessMsg('Room updated successfully!')
      } else {
        setErrorMsg('Error updating room...')
      }
    })
  }

  return (
    <StyledMui>
      <Card>
        <Grid container padding={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} textAlign="center">
            <Collapse in={successMsg != '' || errorMsg != ''}>
              {successMsg != '' ? (
                <Alert severity="success" onClose={() => setSuccessMsg('')}>
                  {successMsg}
                </Alert>
              ) : (
                <Alert severity="error" onClose={() => setErrorMsg('')}>
                  {errorMsg}
                </Alert>
              )}
            </Collapse>
          </Grid>
          <Grid item xs={11} marginBottom={3} textAlign="center">
            <Typography className="purple" component="h4" variant="h4">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={5} marginBottom={4} marginRight={1} textAlign={'end'}>
            <Typography className="purple" color="white" variant="h5">
              Votes to skip song:
            </Typography>
          </Grid>
          <Grid item xs={6} marginBottom={4}>
            <FormControl>
              <TextField
                title="Votos para pular a música"
                placeholder="Votos para pular a música"
                className="purpleInput"
                required
                color="secondary"
                type="number"
                defaultValue={votesToSkip}
                inputProps={{ min: 1, style: { textAlign: 'center' } }}
                onChange={handleVotesChange}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            container
            xs={12}
            direction="column"
            textAlign="center"
            marginBottom={1}
          >
            <Grid item marginBottom={2}>
              <Typography className="purple" color="aliceblue" variant="h5">
                Guest Control of Playback State
              </Typography>
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  value={guestCanPause.toString()}
                  onChange={handleguestCanPauseChange}
                >
                  <FormControlLabel
                    className="purple"
                    value="true"
                    control={<Radio color="primary" />}
                    label="Play/Pause"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    className="purple"
                    value="false"
                    control={<Radio color="error" />}
                    label="No Control"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        {update ? (
          <Grid item xs={12} marginBottom={4} textAlign="center">
            <Button
              className="purple"
              color="secondary"
              variant="outlined"
              onClick={handleUpdateButtonPressed}
            >
              Update Room
            </Button>
          </Grid>
        ) : (
          <Grid container marginBottom={4} spacing={1}>
            <Grid item xs={12} textAlign="center">
              <Button
                className="purple"
                color="secondary"
                variant="outlined"
                onClick={handleRoomButtonPressed}
              >
                Create A Room
              </Button>
            </Grid>
          </Grid>
        )}
      </Card>
      {!update && (
        <Grid container padding={4}>
          <Grid item xs={12} textAlign="center">
            <Button
              className="purple"
              color="secondary"
              variant="outlined"
              to="/"
              component={Link}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      )}
    </StyledMui>
  )
}

export default CreateRoomPage
