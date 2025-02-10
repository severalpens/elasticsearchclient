import Link from "next/link";

interface Faq     {
    _index: string;
    _id: number;
    _score: number;
    _ignored: Array<string>;
    _source: {
        Question: string;
        Answer: string; 
    };
}
export default async function Page() {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/faqs')
  const faqs: Faq[] = await data.json()
    return (
      <div>
        <div id="navbar" className="bg-gray-800 text-white p-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
        </div>
        <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">FAQs</h1>
            <ul className="list-disc pl-5">
              {faqs.map((faq) => (
                <li key={faq._id} className="mb-2">
                  <p className="font-semibold">{faq._source.Question}</p>
                  <p>{faq._source.Answer}</p>
                </li>
              ))}
            </ul>
        </div>
      </div>
    )
  }