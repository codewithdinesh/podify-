import { v4 as uuidv4 } from 'uuid';
import initFirebase from '../../utils/initFirebase';
import 'firebase/firestore';
import 'firebase/storage';

initFirebase(); // Initialize Firebase

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { title, host, category, description, duration, date, image, episodes } = req.body;

    try {
        // Upload podcast image to Firebase Storage
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`podcast/${uuidv4()}.jpg`);
        await imageRef.put(image);
        const imageUrl = await imageRef.getDownloadURL();

        // Upload podcast details to Firestore
        const podcastsRef = firebase.firestore().collection('podcasts');
        const newPodcastRef = podcastsRef.doc();
        const podcastData = {
            id: newPodcastRef.id,
            title,
            host,
            category,
            description,
            duration,
            date,
            image: imageUrl,
        };
        await newPodcastRef.set(podcastData);

        // Upload episodes to Firestore
        const episodesRef = newPodcastRef.collection('episodes');
        const batch = firebase.firestore().batch();
        episodes.forEach((episode) => {
            const newEpisodeRef = episodesRef.doc();
            const episodeData = {
                id: newEpisodeRef.id,
                title: episode.title,
                duration: episode.duration,
                date: episode.date,
                url: episode.url,
            };
            batch.set(newEpisodeRef, episodeData);
        });
        await batch.commit();

        res.status(200).json({ message: 'Podcast uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}
