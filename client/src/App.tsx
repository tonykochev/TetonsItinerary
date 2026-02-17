import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from 'contexts/AuthContext'
import AuthModal from 'components/AuthModal'
import Header from 'components/Header'
import Home from 'pages/Home'
import Hikes from "pages/Hikes"
import 'styles/ReactWelcome.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />

        <main className='page-constent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hikes" element={<Hikes />} />
          </Routes>
        </main>
        
        <footer className='status-footer'>
          <LoggedInStatus />
        </footer>
        <AuthModal />
      </div>
    </Router>
  )
}

const LoggedInStatus = () => {
  const { isLoggedIn, account } = useAuth()

  if (isLoggedIn && !!account) {
    return <p>Hey, {account.username}! Wecome Back!</p>
  }

  return <p>Don't forget to start your backend server, and then authenticate yourself.</p>
}

export default App
