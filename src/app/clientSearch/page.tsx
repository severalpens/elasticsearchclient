"use client"
import { useEffect, useState } from 'react';

interface Document {
    title: string;
    text: string;
}

interface Props {
    documents: Document[];
}

const ClientSearch: React.FC<Props> = () => {
    const [long_documents, setLongDocuments] = useState<Document[]>([]);
    const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
    const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [resultText, setResultText] = useState<string>('No document selected');

    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await fetch('/long_documents.json');
            const data = await response.json();
            setLongDocuments(data);
            setFilteredDocuments(data);
        };

        fetchDocuments();
    }, []);

    const handleSearch = () => {
        if (searchTerm === '') {
            setResultText('No search term entered');
            return;
        }

        if(filteredDocuments.length === 0) {
            setResultText(`Found ${filteredDocuments.length} results. -> Start semantic search using '${searchTerm}  and return the results here.`);
        }
        else {
            setResultText(`Found ${filteredDocuments.length} results but none selected. -> Start semantic search using '${searchTerm}' and return the results here.`);
        }
        
    };

    const filterSearch = (eTargetValue: string) => {
        setSearchTerm(eTargetValue);
        const filtered = long_documents.filter(doc => doc.text.includes(searchTerm));
        setFilteredDocuments(filtered);
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/3 border-r border-gray-300 p-4">
                <div className="mb-4 flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => filterSearch(e.target.value)}
                        placeholder="Type eg 'salamander'"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setFilteredDocuments(long_documents);
                                setSelectedDocument(null);
                                setResultText('No document selected');
                            }}
                            className="ml-2 p-2 bg-red-500 text-white rounded"
                        >
                            X
                        </button>
                    <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                        Search
                    </button>
                </div>
                <ul className="space-y-2">
                    {filteredDocuments.map((doc: Document, index: number) => (
                        <li
                            key={index}
                            onClick={() => setSelectedDocument(doc)}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                        >
                            {doc.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-2/3 p-4">
                {selectedDocument ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{selectedDocument.title}</h2>
                        <p>{selectedDocument.text}</p>
                    </div>
                ) : (
                    <p>{resultText}</p>
                )}
            </div>
        </div>
    );
};

export default ClientSearch;