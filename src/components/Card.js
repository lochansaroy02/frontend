import React from 'react';

const Card = ({ userData}) => {
    let [index, setIndex] = React.useState(0);
    
    const handleLike =async () => {

        const currentUser = userData[index];
        setIndex(index + 1);
        if (index === userData.length - 1) {
            setIndex(0);
        }

        const data = await fetch('/dating/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: currentUser._id })
        })

        const json = await data.json();
        console.log(json);
        console.log(userData[index]);
    }



    const image = 'https://c4.wallpaperflare.com/wallpaper/855/1019/576/deadpool-hd-wallpaper-preview.jpg'
    return (
        <div className='flex flex-col items-center'>
            <div className='text-white'>
                <div className='h-screen  relative ' >
                    <img className=' rounded-lg m-8 h-full object-cover ' src={image} alt="" />
                    <div className='absolute mx-8 my-12 p-4 bottom-0 left-0 ' >
                        <h1 className='text-4xl'> {userData[index]?.fullName}, <span className='text-2xl'> {userData[index]?.gender} </span></h1>
                        {/* <h1 className='text-xl '>{data[index]?.country} </h1> */}
                        <div className='  mt-4 flex   justify-between '>
                            <button onClick={handleLike} className='px-4 py-2 text-lg bg-neutral-900 border border-neutral-100 rounded-xl '>
                                Like
                            </button>
                            <button className='px-4 py-2 text-lg bg-neutral-900 border border-neutral-100 rounded-xl '>
                                Skip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card