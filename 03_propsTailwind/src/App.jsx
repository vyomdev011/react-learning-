import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/Card.jsx';
function App() {

   // State for the counter
   const [counter, setCounter] = useState(0);

   // Increment the counter on every render (after component mounts or re-renders)
   useEffect(() => {
     setCounter(prevCounter => prevCounter + 1);
   });
  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md ' >vite with tailwind</h1>
     <Card name="vishal" count={counter}/>
     <Card name="vats" album = "quest" count={counter}/>

    </>
  )
}

export default App
