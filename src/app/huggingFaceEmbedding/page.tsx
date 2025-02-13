"use client"
import { useState } from "react";
import { createHuggingFaceEmbedding } from "./actions";

export default function Page() {
  const [txt, setTxt] = useState('Create Hugging Face Embedding');
  const [result, setResult] = useState(false);

  const createNew = () => {
    createHuggingFaceEmbedding(txt).then((res) => {
      setResult(res);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="indexName">
            Text
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="indexName"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={createNew}
          >
            Create
          </button>
        </div>
      </form>
      {result && <div className="text-green-500">Embedding created successfully</div>}
    </div>
  )
}