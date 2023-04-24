import React from 'react';

function Episode({ episode }) {
  return (
    <div className="p-4 border border-gray-200 rounded mb-4">
      <h3 className="text-lg font-bold mb-2">{episode.title}</h3>
      <p className="text-gray-600 mb-2">{episode.description}</p>
      <audio src={episode.audioUrl} controls className="mb-2"></audio>
      <p className="text-sm text-gray-500">{episode.publishedAt}</p>
    </div>
  );
}

export default Episode;
