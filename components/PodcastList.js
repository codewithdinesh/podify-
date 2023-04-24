import React, { useState, useEffect } from 'react';

function PodcastList() {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        fetch('/api/podcasts')
            .then((response) => response.json())
            .then((data) => setPodcasts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Podcast List</h1>
            <ul>
                {podcasts.map((podcast) => (
                    <li key={podcast.id}>
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PodcastList;
