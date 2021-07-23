import Header from './components/Header'
import Footer from './components/Footer'
import logo from './logo.svg'
import './App.css'

function App() {
     return (
          <div className="App">
               <header className="App-header">
                 <Header/>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                         Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                         className="App-link"
                         href="https://bocacode.com"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         Boca Code is da best
                    </a>
               <Footer/>
               </header>
          </div>
     )
}

export default App
