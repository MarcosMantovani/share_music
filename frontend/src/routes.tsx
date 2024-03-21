import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import RoomJoinPage from './Pages/RoomJoinPage'
import CreateRoomPage from './Pages/CreateRoomPage'
import Room from './components/Room'
import HomePage from './Pages/HomePage'
import Info from './components/Info'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join/" element={<RoomJoinPage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route path="/room/:roomCode" element={<Room />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </Router>
)

export default AppRoutes
