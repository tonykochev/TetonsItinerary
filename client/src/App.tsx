import React from 'react'
import { useAuth } from 'contexts/AuthContext'
import AuthModal from 'components/AuthModal'
import Header from 'components/Header'
/*import Home from 'pages/Home'*/
import Hikes from "pages/Hikes"
import 'styles/ReactWelcome.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hikes />
      <LoggedInStatus />
      <AuthModal />
    </div>
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
