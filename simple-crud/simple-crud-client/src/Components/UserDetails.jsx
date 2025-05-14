import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>UserDetails</h1>
        </div>
    );
};

export default UserDetails;