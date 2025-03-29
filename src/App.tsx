import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { About } from './pages/About'
import { useTelegramBackBtn } from './hooks/useTelegramBackBtn'
// import { useTelegram } from './hooks/useTelegram'

function App() {
  useTelegramBackBtn();
  // const {user, isTelegram} = useTelegram();
  // console.log(user);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
