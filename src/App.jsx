import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddBook from './pages/AddBook/AddBook'
import EditBook from './pages/EditBook/EditBook'
import AddNewBook from './pages/AddNewBook/AddNewBook'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddBook />} />
          <Route path='/addNewBook' element={<AddNewBook />} />
          <Route path='/editBook/:id' element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
