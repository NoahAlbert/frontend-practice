import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainImage from './components/MainImage'
import Specials from './components/Specials'
import FoodItems from './components/FoodItems'

function App() {
     return (
          <div className="App">
               <Header />
               {/* <MainImage/> */}
               <Specials/>
               <FoodItems />
               {/* <Footer /> */}
          </div>
     )
}

export default App
