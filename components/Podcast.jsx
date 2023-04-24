import React from 'react';

import Link from 'next/link';

function Podcast({ podcast }) {
    return (
        <Link href={`/podcasts/${podcast.id}`}>
            <div
                className={`p-1  border-gray-200 rounded m-1 cursor-pointer `}
            // onClick={onClick}
            >

                {/* <p className="text-gray-600 mb-2">{podcast.description}</p> */}
                <img src={podcast.imageUrl} alt={podcast.title} className="mb-2 w-fit rounded w-1/4 " />
                <p className="text-sm font-bold mb-1">{podcast.title}</p>
                <p className="text-sm text-gray-500">{podcast.publisher}</p>
            </div>
        </Link>
    );
}

export default Podcast;
