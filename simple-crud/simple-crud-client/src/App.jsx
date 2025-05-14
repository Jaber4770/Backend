import './App.css'
import Users from './Components/Users'

const userPromise = fetch('http://localhost:3000/users').then(res => res.json());


// userdetails


function App() {

  return (
    <>
      <h1>Simple CRUD oparation</h1>
      <Users userPromise={userPromise}></Users>
    </>
  )
}

export default App
