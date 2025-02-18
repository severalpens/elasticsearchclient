"use client"
import { useState } from 'react';
import { getSuggestions } from '../actions';

interface Document {
    title: string;
    text: string;
}

export default function Page() {
    const [suggestions, setSuggestions] = useState<Document[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchSuggestions() {
        setLoading(true);
        const data = await getSuggestions();
        setSuggestions(data);
        setLoading(false);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                onClick={fetchSuggestions}
            >
                Fetch Suggestions
            </button>
            {loading && <p className="text-gray-700">Loading...</p>}
            <div className="w-full max-w-2xl">
                {suggestions.map((doc, i) => (
                    <div key={i} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                        <p className="text-gray-700">{doc.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

