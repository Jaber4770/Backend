import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ userPromise }) => {
    const userData = use(userPromise);
    // console.log(userData);
    const [userInfo, setUserInfo] = useState(userData);
    // console.log(userInfo);

    const handleOnSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        // console.log(user);


        // create user:
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // console.log(data);
                    user._id = data.insertId;
                    const newAddedUser = [...userInfo, user];
                    setUserInfo(newAddedUser);
                    e.target.reset();
                }
            })
    }

    const handleUserDelete = (id) => { 
        console.log('delete', id);
        fetch(`http://localhost:3000/users/${id}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingUsers = userInfo.filter(user => user._id != id);
                    setUserInfo(remainingUsers);
                    // console.log(data)
                }
            });
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
            <div>
                {
                    userInfo.map(u => {
                        return (<p
                            key={u._id}>
                            {u.name}:
                            {u.email}
                            <button onClick={() => handleUserDelete(u._id)}>X</button>
                            <Link to={`/userdetails/${u._id}`}>details</Link>
                            <Link to={`/edit/${u._id}`}>Edit</Link>
                        </p>)
                    })
                }
            </div>
        </div>
    );
};

export default Users;