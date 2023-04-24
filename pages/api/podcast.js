import podcasts from "../../data/podcasts.json";

export default function handler(req, res) {
    const { id } = req.query;

    const podcast = podcasts.find((p) => p.id === parseInt(id));

    if (!podcast) {
        res.status(404).json({ message: 'Podcast not found' });
    } else {
        res.status(200).json({ podcast });
    }
}
