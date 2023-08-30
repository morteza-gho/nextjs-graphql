// "use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-gray-200 p-24">

      <div className="mb-8">
        <h3 className="text-lg font-bold">Next.js 13 App Directory - Graph QL</h3>
        <p className="my-4">
          <Link href="/graph-ql/client-side/users">
            Use Apollo Client inside Client Side Component - users 1
          </Link>
        </p>
        <p className="my-4">
          <Link href="/graph-ql/client-side/users2">
            Use Apollo Client inside Client Side Component - users 2
          </Link>
        </p>
        <p>
          <Link href="/graph-ql/server-side">
            Use Apollo Client inside React Server Component (RSC)
          </Link>
        </p>
      </div>

      <div className="border border-gray-400 mb-8 w-1/2"></div>

      <div>
        <h3 className="text-lg font-bold">Next.js 13 App Directory - React Query</h3>
        <p className="my-4">
          <Link href="/react-query/info">Get Info</Link>
        </p>
      </div>

    </main>
  )
}
