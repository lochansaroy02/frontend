import React, { useState } from 'react';

const CreateUser = () => {


    const [fullName, setFullName] = useState([]);
    const [email, setEmail] = useState([]);
    const [gender, setGender] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);



    const createUser = async () => {
        const response = await fetch('http://localhost:1234/dating/users', {
            method: "POST",
            body: JSON.stringify({
                //body can be modified
                fullName: fullName,
                email: email,
                imageUrl: imageUrl,
                gender: gender
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

 


    return (
        <div className='flex  flex-col items-center   text-white'>

            <div className='grid grid-cols-2 '>

                <div className='bg-neutral-900  p-4 flex items-start  flex-col'>
                    <label htmlFor="">Full name</label>
                    <input type="text" className='text-black' onChange={(e) => { setFullName(e.target.value) }} />
                </div>
                <div className='bg-neutral-900  p-4 flex items-start  flex-col'>
                    <label htmlFor="">email</label>
                    <input type="text" className='text-black' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='bg-neutral-900  p-4 flex items-start  flex-col'>
                    <label htmlFor="">image</label>
                    <input type="text" className='text-black' onChange={(e) => { setImageUrl(e.target.value) }} />
                </div>
                <div className='bg-neutral-900  p-4 flex items-start  flex-col'>
                    <label htmlFor="">gender</label>
                    <input type="text" className='text-black' onChange={(e) => { setGender(e.target.value) }} />
                </div>
            </div>



            <button onClick={createUser}> click here </button>

        </div>
    )
}

export default CreateUser;