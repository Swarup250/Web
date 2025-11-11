import './App.css'
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
    },[])

  return !loading ? (
    <div className='h-screen w-screen '>Pls Login first!! </div>
  ) : (null)
}

export default App
