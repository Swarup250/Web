import config from './conf/conf'
import './App.css'

function App() {
  console.log(config)
  return (
    <div className='h-screen w-screen'>
      <div className='text-amber-300 grid '>This an test for Grid
      <div className=' bg-amber-400 grid grid-cols-3 gap-5 justify-items-center'>
        <div className="bg-amber-600 h-40 w-40 "></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        <div className="bg-amber-600 h-40 w-40"></div>
        </div>
      </div>
    </div>
  )
}

export default App
