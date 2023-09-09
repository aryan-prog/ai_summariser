import Upper from './components/Upper.jsx'
import Lower from './components/Lower.jsx'
import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Upper />
        <Lower />
      </div>
    </main>
  )
}

export default App
