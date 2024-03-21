import {
  Grid,
  Typography,
  Card,
  IconButton,
  LinearProgress,
  CardMedia
} from '@mui/material'
import { PlayArrow, SkipNext, Pause } from '@mui/icons-material'

import spotify from '../../assets/media/spotify.png'
import { SongType } from '../Room'

import { StyledMui } from './styles'

type MusicPlayerProps = {
  song: SongType
}

const MusicPlayer = ({ song }: MusicPlayerProps) => {
  const {
    title,
    artist,
    duration = 1,
    image_url,
    is_playing,
    time = 1,
    votes,
    votes_required
  } = song

  const songProgress = (time / duration) * 100

  // const tempImg =

  const pauseSong = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/spotify/pause', requestOptions)
  }

  const playSong = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/spotify/play', requestOptions)
  }

  const skipSong = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/spotify/skip', requestOptions)
  }

  return (
    <>
      <StyledMui>
        <Card className="mediaCard">
          {image_url ? (
            <CardMedia image={image_url} component="img" />
          ) : (
            <CardMedia image={spotify} component="img" />
          )}
        </Card>
        <Card className="description">
          <Grid container direction="column" spacing={2}>
            <Grid item textAlign="center">
              <Typography className="purple" variant="h4" component="h4">
                {title}
              </Typography>
              <Typography className="purple" variant="subtitle1">
                {artist}
              </Typography>
            </Grid>
            <Grid item>
              <LinearProgress
                color="primary"
                variant="determinate"
                value={songProgress}
              />
            </Grid>
          </Grid>
          <div className="playback">
            <Grid item textAlign={'end'}>
              <IconButton
                onClick={() => {
                  is_playing ? pauseSong() : playSong()
                }}
              >
                {is_playing ? <Pause /> : <PlayArrow />}
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" direction="row" spacing={1}>
                <Grid item>
                  <IconButton onClick={() => skipSong()}>
                    <SkipNext />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography className="purple" variant="subtitle1">
                    {votes} / {votes_required}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Card>
      </StyledMui>
    </>
  )
}

export default MusicPlayer
