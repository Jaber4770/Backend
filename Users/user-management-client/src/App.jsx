import { Link } from 'react-router';
import './App.css'
import Users from './Componenet/users';
import NewUsers from './Componenet/NewUsers';

const usersPromise = fetch('http://localhost:3000/users').then(res => res.json());
const usersInfoPromise = fetch('http://localhost:3000/userinfo').then(res => res.json());

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/users">User</Link>
          <Link to="/newusers">New User</Link>
        </nav>
      </div>
      <div>
        <NewUsers usersInfoPromise={usersInfoPromise}></NewUsers>
      </div>
      <div>
        <h1>User management application</h1>
        <Users usersPromise={usersPromise}></Users>
      </div>
    </>
  )
}

export default App
