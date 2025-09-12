
import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

function App() {

  return (
    <div
      className="bg-gray-50 h-full w-full overflow-y-scroll custom-scrollbar"
    >
      <div
        className="h-screen max-w-[425px] mx-auto"
        id='mainDiv'
      >
        <NavBar />
        <div className="min-h-full rounded-t-[40px] bg-white px-4 py-6 ">
          <MainContent />
          <Footer />
        </div>
      </div>
    </div >
  )
}

export default App
