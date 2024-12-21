import {Create_user} from './components/create_user'
import {Read_users} from './components/read_users'
import {Welcome_page} from './components/wecome'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Update_user} from './components/update_user'
function App() {
  return (
    <>         
    <Router>
      <Routes>
         <Route path="/" element={<Welcome_page />}></Route>
         <Route path="/create" element={<Create_user/>}></Route>
         <Route path="/read" element={<Read_users />}></Route>
         <Route path="/edit/:id" element={<Update_user />} />
      </Routes>
    </Router>
    </>
  )
}

export default App