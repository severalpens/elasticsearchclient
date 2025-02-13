"use client"
import { useState } from 'react';
import Link from 'next/link';

interface SearchResult  {
    text: string;
    embedding: number[];
}

export default function Page() {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

    const handleSearch = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://esresearch.azurewebsites.net';

        const data = await fetch(`${apiUrl}/api/huggingFaceHybridSearch/?q=${query}`);
        const result: SearchResult[] = await data.json();
        setSearchResult(result);
    };

    return (
        <div>
            <div id="navbar" className="bg-gray-800 text-white p-4">
            <Link href="/" className="text-white">
                  Home
          </Link>
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Search FAQs</h1>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    placeholder="Search for a question..."
                />
                <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
                <ul className="list-disc pl-5 mt-4">
                    {searchResult.map((faq) => (
                        <li key={faq._id} className="mb-2">
                            <p className="font-semibold">{faq._source.Question}</p>
                            <p>{faq._source.Answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
