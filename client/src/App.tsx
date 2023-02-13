import { Routes, Route } from 'react-router-dom'

import './App.css'
import {
  ClimberPage,
  ClimbsPage,
  AuthPage
} from './pages/index'
import {
  Nav
} from './core/index'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <ClimbsPage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="climber" 
          element={
            <ProtectedRoute>
              <ClimberPage/>
            </ProtectedRoute>
          }
        />
        <Route path="auth" element={<AuthPage/>}/>
      </Routes>
    </div>
  )
}

export default App
