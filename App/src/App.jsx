import './App.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import authService from "./appwrite/auth"
import { login,logout } from './Store/authSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))
    },[dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo:{/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
