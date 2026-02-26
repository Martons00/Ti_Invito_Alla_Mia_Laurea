import { useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Homepage from './component/Homepage'
import './App.css'
import './component/css/ProjectDescription.css';
import { useEffect } from 'react';
import {DecryptedText} from './component/CustomText';

// importi solo quelli che ti servono nelle determinate view
function App() {
  const [count, setCount] = useState(0)
  const footerText = "Raffaele Martone - Portfolio";
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000) // 2s
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-logo">
          <DecryptedText
            text="Sei pronto per l'evento dell'anno?"
            speed={80}
            maxIterations={30}
            revealDirection="start"
            sequential={true}
            animateOn="view"
            className='splash-logo'
          />
        </div>
        <DecryptedText
          text="Loading Invito..."
          speed={80}
          maxIterations={30}
          revealDirection="start"
          sequential={true}
          animateOn="view"
          className='splash-text'
        />
      </div>
    )
  }


  return (
    <>
      <div className="page-container">
        <main className="content">
          <Routes>
            <Route
              path="/Ti_Invito_Alla_Mia_Laurea" element={
                <Homepage />
              }>
            </Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
