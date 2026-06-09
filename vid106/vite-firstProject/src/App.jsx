import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Cards title="card 1" description="card 1 description "/>
        <Cards title="card 2" description="card 2 description "/>
        <Cards title="card 3" description="card 3 description "/>
        <Cards title="card 4" description="card 4 description "/>
      </div>
      <Footer/>
    </>
  )
}

export default App
