"use client"
import { useState } from "react";
import { createIndex } from "../actions";

export default function Page() {
  const [indexName, setIndexName] = useState('test1');
  const [embeddingType, setEmbeddingType] = useState('standard');
  const [result, setResult] = useState(false);

  const createNewIndex = () => {
    console.log('createNewIndex', indexName, embeddingType);
    createIndex(indexName,embeddingType).then((res) => {
      console.log('createIndex', res);
      setResult(res);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="indexName">
            Index Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="indexName"
            value={indexName}
            onChange={(e) => setIndexName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="embeddingType">
            Embedding Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="embeddingType"
            value={embeddingType}
            onChange={(e) => setEmbeddingType(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={createNewIndex}
          >
            Create
          </button>
        </div>
      </form>
      {result && <div className="text-green-500">Index created successfully</div>}
    </div>
  )
}