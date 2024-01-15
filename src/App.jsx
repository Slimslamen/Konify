import FirstPage from './Firstpagefolder/FirstPage'
import Blouses from './Pages/blouses'
import Tshirts from './Pages/Tshirts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route 
              path="/"
              element={<FirstPage />}
            />
            <Route
              path="/Tshirts"
              element={<Tshirts />}
            />
            <Route
            path="/Blouses"
            element={<Blouses />}
            />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
