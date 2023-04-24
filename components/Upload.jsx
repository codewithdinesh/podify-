import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";


function UploadPodcast() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", file);

        try {
            const response = await fetch("/api/podcasts/upload", {
                method: "POST",
                body: formData,
            });
            console.log(response);

            if (response.ok) {
                // Handle success
                // console.log(response);
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle error

            console.log(error)
        }
    };


    return (

        <div className="max-w-md mx-auto my-8">
            <h1 className="text-2xl font-semibold mb-4">Upload Your Podcast</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="podcast">
                        Podcast
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="podcast"
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Upload
                    </button>
                </div>
            </form>
        </div>

    );
}

export default UploadPodcast;
