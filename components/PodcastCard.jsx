import { Card } from 'flowbite-react'
import React from 'react'

const PodcastCard = ({ episode }) => {
    return (
        <Card className='m-1'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {episode.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {episode.description}
            </p>

        </Card>

    )
}

export default PodcastCard