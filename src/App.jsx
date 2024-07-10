
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import './App.css'
import Hero from './Components/Hero'
import Header from './Components/Header'
import Sign from './Components/Sign'
import PostPage from './Components/PostPage'
import PostFeel from './Components/PostFeel'
import LoginPost from './Components/LoginPost'
import Footer from './Components/Footer'
import PostData from './Components/PostData'
import Edit from './Components/Edit'
import Delete from './Components/Delete'
import Password from './Components/Password'
import UserContextProvidor from './Context/UserContextProvidor'
import ForgetPassword from './Components/ForgetPassword'
import ResetPassword from './Components/ResetPassword'
import About from './Components/About'
import ForgetPasswordById from './Components/ForgetPasswordById'

function App() {
  
  
  return (
    <UserContextProvidor>
  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/mydetails/:id' element={<About/>}></Route>
      <Route path='/Sign' element={<Sign/>}></Route>
      <Route path='/PostPage' element={<PostPage/>}></Route>
      <Route path='/PostFeel' element={<PostFeel/>}></Route>
      <Route path='/LoginPost' element={<LoginPost/>}></Route>
      <Route path='/PostData/:myemail' element={<PostData/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
      <Route path='/Password' element={<Password/>}></Route>
      <Route path='/delete/:id' element={<Delete/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/forget-password' element={<ForgetPassword/>}></Route>
      <Route path='/forget-password/:id' element={<ForgetPasswordById/>}></Route>
      <Route path='/reset-password/:id' element={<ResetPassword/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>

    </UserContextProvidor>
  )
}

export default App
