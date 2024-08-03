import React, { useEffect, useState } from 'react';
import Card from './Card';

const Users = () => {

    const [userData, setUserData] = useState([]);
    console.log(userData);
    const getUser = async () => {
        const response = await fetch('http://localhost:1234/dating/users')
        const json = await response.json();
        setUserData(json.data || []);
    }


    useEffect(() => {
        getUser()

    }, []);



    return (
        <div className='text-white'>
            <Card userData={userData} />
        </div>
    )
}

export default Users