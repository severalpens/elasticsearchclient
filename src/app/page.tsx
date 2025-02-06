import Image from "next/image";

export default function Home() {
  const localHost = "http://localhost:3001"
  const remoteHost = "https://gray-smoke-064726800.4.azurestaticapps.net"
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>
          <h2 className="text-2xl font-bold mb-4">Localhost Routes</h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
              <a href={`${localHost}/faqs`}>/faqs</a>
            </li>
            <li className="mb-2">
              <a href={`${localHost}/search`}>/search</a>
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Remote Host Routes</h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
              <a href={`${remoteHost}/faqs`}>/faqs</a>
            </li>
            <li className="mb-2">
              <a href={`${remoteHost}/search`}>/search</a>
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <a
                href="https://gray-smoke-064726800.4.azurestaticapps.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Azure Static Web App
              </a>

            </li>
            <li className="mb-2">
              <a
                href="https://esresearch.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
              </li>          
              </ol>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
