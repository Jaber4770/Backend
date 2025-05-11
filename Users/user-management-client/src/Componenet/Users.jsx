import { use, useState } from 'react';

const Users = ({ usersPromise }) => {
    const initialUser = use(usersPromise);
    console.log(initialUser);

    const [users, setUser] = useState(initialUser);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user);

        // create user in the server:
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const newUsers = [...users, data];
                setUser(newUsers);
                e.target.reset();
        })



    }
    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="">Name</label>
                    <input name="name" type="text" placeholder='name' /><br />
                    <label htmlFor="">Email</label>
                    <input name="email" type="email" placeholder='email' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            {users.map(usr => <p key={usr.id}>{usr.name}: {usr.email}</p>)}
        </div>
    );
};

export default Users;