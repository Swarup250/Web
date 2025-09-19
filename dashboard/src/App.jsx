import React from "react";
import Weather from "./Component/Weather/Weather";
import Clock from "./Component/Time/Clock";
import Timer from "./Component/Time/Timer";
import "./App.css";
import ToDoList from "./Component/ToDo/ToDoList";
function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center place-items-center flex-wrap">
        <div className=" lg:h-9/12 lg:w-10/12 md:h-10/12 md:w-11/12 h-8/12 w-9/12 bg-white opacity-60 rounded-4x overflow-hidden ">
          <div className="h-full w- full flex flex-row">
          <div className="h-50 w-3/12  bg-amber-300">
            <Weather />
          </div>
          <div className="h-50 w-3/12 bg-amber-300">
            <h3>Curret Time</h3>
            <Clock />
          </div>
          <div className="h-50 w-3/12  bg-amber-300">
            <h3>Timer</h3>
            <Timer />
          </div>
          </div>
              <ToDoList />
          </div>
        </div>
        <ToDoList />
    </>
  );
}

export default App;
