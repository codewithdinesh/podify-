import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Button, Card, Spinner } from 'flowbite-react';
import PodcastCard from '@/components/PodcastCard';

function Podcast() {
    const [podcast, setPodcast] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchPodcast() {
            try {
                const response = await fetch(`/api/podcast?id=${id}`);
                const data = await response.json();
                setPodcast(data.podcast);
                // console.log(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPodcast();
    }, [id]);

    if (!podcast) {
        return (
            <Layout>
                <div className="flex w-fit items-center">

                    <Spinner aria-label="Spinner" />
                    <span className="pl-3">
                        Loading...
                    </span>

                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Card className=''>

                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 flex items-center flex-row md:flex-col">
                        <img src={podcast.imageUrl} alt={podcast.title} className="rounded mb-4 m-1 w-2/5" />
                        <div className="mb-4 m-1 p-1">
                            <h2 className="font-bold text-xl mb-2">{podcast.title}</h2>
                            <p className="text-gray-600">{podcast.description}</p>
                            <p className="text-gray-600 text-sm font-semibold mt-2 cursor-pointer">By {podcast.publisher}</p>

                        </div>
                    </div>
                    <hr />
                    <div className="md:w-2/3 md:pl-8">
                        <h3 className="text-2xl font-bold mb-4">Episodes:</h3>
                        <ul>
                            {podcast.episodes.map((episode) => (
                                <PodcastCard key={episode.id} episode={episode} />
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>

        </Layout>
    );
}

export default Podcast;
