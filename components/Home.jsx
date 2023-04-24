import Header from './Header'
import Podcast from './Podcast'
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [podcasts, setPodcasts] = useState([]);


    useEffect(() => {
        fetch('/api/podcasts')
            .then((response) => response.json())
            .then((data) => setPodcasts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <div className="flex max-w-7xl mx-auto px-4 py-8">
                    <div className="flex-1 mr-8">
                        <h2 className="text-xl font-bold mb-4">Podcasts</h2>
                        <div className='flex '>

                            {podcasts.map(podcast => (
                                <Podcast
                                    key={podcast.id}
                                    podcast={podcast}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </main>


            <footer className="bg-gray-800 text-white py-4">
                <p className="mx-auto max-w-7xl px-4 text-sm">&copy; 2023 Podify+</p>
            </footer>
        </div>
    )
}

export default Home