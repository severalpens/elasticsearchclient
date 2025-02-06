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
    const data = await fetch('https://esresearch.azurewebsites.net/faqs')
    const faqs: Faq[] = await data.json()
    return (
        
      <div>
            <h1>FAQs</h1>
          <ul>
            {faqs.map((faq) => (
              <li key={faq._id}>{faq._source.Question}</li>
            ))}
          </ul>
      </div>
    )
  }