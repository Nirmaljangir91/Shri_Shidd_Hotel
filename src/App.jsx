import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage.page";



function App() {
  const [count, setCount ] = useState(0);
  return (
    
    <>
      <HomePage/>
    
    </>
  )
}


export default App; 