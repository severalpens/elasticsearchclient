interface Faq {
  _id: string;
  Question: string;
  Answer: string;
}

export default async function Page() {
    const data = await fetch('https://esresearch.azurewebsites.net/faqs')
    const faqs: Faq[] = await data.json()
    return (
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>{faq.Question}</li>
        ))}
      </ul>
    )
  }