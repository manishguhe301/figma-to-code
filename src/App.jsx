
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <div
      className="bg-gray-100 h-full w-full overflow-y-hidden"
    >
      <div
        className="h-screen max-w-[425px] mx-auto overflow-y-scroll custom-scrollbar"
        id='mainDiv'
      >
        <NavBar />
        <div className="pt-20 min-h-full rounded-t-4xl bg-white"></div>
      </div>
    </div >
  )
}

export default App
