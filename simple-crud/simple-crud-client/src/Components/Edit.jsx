import React from 'react';
import { useLoaderData } from 'react-router';

const Edit = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updateUser = { name, email };
        console.log(updateUser);

        // update data in the server
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: "PUT",
            headers: { "content-type": 'application/json' },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => console.log("after update", data));



    }





    return (
        <div>
            <h1>edit</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' defaultValue={user.name}/><br />
                <input type="email" name='email' defaultValue={user.email} /><br />
                <input type="submit" value="Update info" />
            </form>
        </div>
    );
};

export default Edit;