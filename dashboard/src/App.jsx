import React from "react";
import "./App.css";
function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center place-items-center flex-wrap">
        <div className=" lg:h-9/12 lg:w-10/12 md:h-10/12 md:w-11/12 h-8/12 w-9/12 bg-white opacity-60 rounded-4x flex flex-row ">
          <div>
            <h3 className="h-50 w-4/12 shrink-0 bg-amber-300">Today's Weather </h3>
          </div>
          <div>
            <h3 className="h-50 w-3/12 bg-amber-300">Time</h3> 
          </div>
          <div>
            <h3 className="h-50 w-4/12 bg-amber-300">Pomodoro</h3>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
