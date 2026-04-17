import { Outlet } from 'react-router'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'

function App() {
  const [timelineEntries, setTimelineEntries] = useState([])

  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  const addEntry = (entry) => {
    setTimelineEntries([entry, ...timelineEntries])
  }

  const triggerToast = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Outlet context={{ timelineEntries, addEntry, triggerToast }} />
      </main>
      <Footer />

      <Toast message={toastMessage} isVisible={showToast} />
    </div>
  )
}

export default App