import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/material'
import { NavigateBefore, Settings } from '@mui/icons-material'

import CreateRoomPage from '../../Pages/CreateRoomPage'
import MusicPlayer from '../MusicPlayer'

import { Margin } from './styles'

type RoomDetailsData = {
  votes_to_skip: number
  guest_can_pause: boolean
  is_host: boolean
}

type RoomParams = {
  roomCode: string | null
}

export type SongType = {
  title?: string
  artist?: string
  duration?: number
  time?: number
  image_url?: string
  is_playing?: boolean
  votes?: number
  votes_required?: number
  id?: number
}

const Room = () => {
  const [guestCanPause, setGuestCanPause] = useState(false)
  const [votesToSkip, setVotesToSkip] = useState(2)
  const [isHost, setIsHost] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false)
  const [song, setSong] = useState<SongType>({
    title: '',
    artist: '',
    duration: 1,
    time: 1,
    image_url: '',
    is_playing: false,
    votes: 0,
    id: 0
  })
  const navigate = useNavigate()

  const { roomCode } = useParams() as RoomParams

  const authenticateSpotify = () => {
    fetch('/spotify/is-authenticated')
      .then((response) => response.json())
      .then((data) => {
        setSpotifyAuthenticated(data.status)
        if (!data.status) {
          fetch('/spotify/get-auth-url')
            .then((response) => response.json())
            .then((data) => {
              window.location.replace(data.url)
            })
        }
      })
  }

  const getCurrentSong = () => {
    fetch('/spotify/current-song')
      .then((response) => {
        if (!response.ok) {
          return {}
        } else {
          return response.json()
        }
      })
      .then((data: SongType) => {
        if (data) {
          setSong(data)
        }
      })
  }

  useEffect(() => {
    const getRoomDetails = () => {
      fetch('/api/get-room' + '?code=' + roomCode)
        .then((response) => {
          if (!response.ok) {
            navigate('/', { replace: true })
          } else {
            return response.json()
          }
        })
        .then((data: RoomDetailsData) => {
          setVotesToSkip(data.votes_to_skip)
          setGuestCanPause(data.guest_can_pause)
          setIsHost(data.is_host)
          if (isHost) {
            authenticateSpotify()
          }
        })
    }
    getRoomDetails()
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCurrentSong()
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const leaveButtonPressed = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/api/leave-room', requestOptions).then((response) =>
      navigate('/', { replace: true })
    )
  }

  return (
    <>
      {showSettings ? (
        <>
          <CreateRoomPage
            update={true}
            votesToSkip={votesToSkip}
            guestCanPause={guestCanPause}
            roomCode={roomCode}
          />
          <Grid container padding={4}>
            <Grid item xs={12} marginTop={0} textAlign="center">
              <Button
                className="purple"
                variant="outlined"
                color="secondary"
                onClick={() => setShowSettings(false)}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Margin>
          <Grid container justifyContent="center" alignItems={'center'}>
            <Grid item xs={4} textAlign="center">
              <Button variant="text" onClick={leaveButtonPressed}>
                <NavigateBefore />{' '}
                <Typography className="purple textShadow" variant="body2">
                  Leave Room
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Typography className="purple textShadow" variant="body1">
                CODE ROOM: {roomCode}
              </Typography>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Button onClick={() => setShowSettings(true)} color="primary">
                <Typography className="purple textShadow" variant="body2">
                  Settings
                </Typography>
                <Settings />
              </Button>
            </Grid>
            <MusicPlayer song={song} />
          </Grid>
        </Margin>
      )}
    </>
  )
}

export default Room
