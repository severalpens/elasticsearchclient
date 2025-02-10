import Link from "next/link";

export default function Home() {
  return (
    <div>
                  <div id="navbar" className="bg-gray-800 text-white p-4">
                  <Link href="/" className="text-white">
                  Home
          </Link>
            </div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="h1-title" className="flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-4xl font-bold text-center sm:text-left">Elasticsearch Research</h1>
            <p className="text-center sm:text-left">This is a simple Next.js application that demonstrates how to use Elasticsearch with a Next.js client.</p>
          </div>
        <div>
            <h2 className="text-2xl font-bold mb-4">Routes</h2>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
                <a href={`${process.env.NEXT_PUBLIC_CLIENT_URL }/faqs`}>/faqs</a>
              </li>
              <li className="mb-2">
                <a href={`${process.env.NEXT_PUBLIC_CLIENT_URL }/search`}>/search</a>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Layers</h2>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
                <a href="https://gray-smoke-064726800.4.azurestaticapps.net/">
                  Next.js Client (https://gray-smoke-064726800.4.azurestaticapps.net/)
                </a>
                </li>
                <li className="mb-2">
                <a    href="https://esresearch.azurewebsites.net"                >
                  Node.js (Express) Server
                </a>
                </li>
                <li className="mb-2">
                  Elasticsearch Cluster (Hosted on Azure)
                </li>
                </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Repos</h2>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">
                <a
                  href="https://github.com/severalpens/esresearchapi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Repo
                </a>
                </li>
                <li className="mb-2">
                <a
                  href="https://github.com/severalpens/elasticsearchclient"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Repo
                </a>
                </li>
                </ol>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    </div>
  );
}
