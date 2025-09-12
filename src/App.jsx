
import './App.css'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

function App() {

  return (
    <div
      className="bg-gray-50 h-full w-full overflow-y-scroll custom-scrollbar"
    >
      <div
        className="h-screen max-w-[425px] mx-auto "
        id='mainDiv'
      >
        <NavBar />
        <MainContent />
      </div>
    </div >
  )
}

export default App
