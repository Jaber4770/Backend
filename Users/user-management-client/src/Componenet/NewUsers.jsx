import { use, useState } from "react";

const NewUsers = ({ usersInfoPromise }) => {
    const dataPromise = use(usersInfoPromise);
    const [users, setUsers] = useState(dataPromise)
    console.log(dataPromise);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const user = { name, phone };
        console.log(user);

        fetch('http://localhost:3000/userinfo', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const setNewData = [...users, data];
                setUsers(setNewData);
                console.log(data);
            })
    }

    return (
        <div>
            <h1>New users Add here.abc</h1>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" id="" placeholder="Name" /><br />
                    <label>Phone</label>
                    <input type="number" placeholder="number" name="phone" id="" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                {
                    users.map(User => <p>{User.name}{User.phone}</p>)
                }
            </div>
        </div>
    );
};

export default NewUsers;