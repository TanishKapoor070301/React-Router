import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className='bg-gray-800 min-h-screen flex flex-col items-center justify-center p-6'>
            <div className='text-center mb-6'>
                <a href='https://github.com/TanishKapoor070301' target='_blank' rel='noopener noreferrer'>
                    <h1 className='text-4xl font-bold text-white mb-4 hover:text-yellow-400 transition duration-300'>
                        GitHub Profile
                    </h1>
                </a>
                <p className='text-2xl text-yellow-400'>Followers: {data.followers}</p>
            </div>

            <div className='bg-gray-900 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300'>
                <img
                    className='rounded-full border-4 border-yellow-400 shadow-md mb-6'
                    src={data.avatar_url}
                    alt="GitHub profile"
                    width={200}
                />
                <h2 className='text-white text-2xl font-semibold mb-4'>{data.name}</h2>
                <p className='text-gray-400 text-lg mb-4'>{data.bio}</p>
                <a href={data.html_url} target='_blank' rel='noopener noreferrer' className='text-yellow-400 hover:text-yellow-500 transition duration-300'>
                    Visit GitHub Profile
                </a>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/TanishKapoor070301");
    return response.json();
};
