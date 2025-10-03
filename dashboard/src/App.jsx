import React from "react";
import Weather from "./Component/Weather/Weather";
import Clock from "./Component/Time/Clock";
import Timer from "./Component/Time/Timer";
import "./App.css";
import ToDoList from "./Component/ToDo/ToDoList";
function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center flex-wrap">
      <div className="h-[800px] w-[900px] bg-white opacity-60 rounded-4xl overflow-hidden flex flex-row flex-wrap justify-around items-start p-8 gap-6">
        <div className="w-[300px] min-h-[340px] rounded-2xl bg-amber-300 shadow-lg p-4">
          <Weather />
        </div>
        <div className="w-[300px] min-h-[160px] rounded-2xl bg-amber-300 shadow-lg p-4 flex flex-col items-center">
          <h3 className="mb-2 text-lg font-bold">Current Time</h3>
          <Clock />
        </div>
        <div className="w-[300px] min-h-[240px] rounded-2xl bg-amber-300 shadow-lg p-4 flex flex-col items-center">
          <h3 className="mb-2 text-lg font-bold">Timer</h3>
          <Timer />
        </div>
        <div className="w-full mt-6">
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
