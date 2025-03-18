
import './App.css';
import Card from './components/Card.jsx';
function App() {

 
  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md ' >vite with tailwind</h1>
     <Card name="vishal" count= "1" />
     <Card name="vats" album = "quest" count= "2"/>

    </>
  )
}

export default App
