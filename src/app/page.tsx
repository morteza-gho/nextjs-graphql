import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-gray-200 p-24">

      <h1>Hello, Next.js 13 App Directory!</h1>
      <p className="my-4">
        <Link href="/client-side/users">
          Use Apollo Client inside Client Side Component - users
        </Link>
      </p>
      <p className="my-4">
        <Link href="/client-side/users2">
          Use Apollo Client inside Client Side Component - users 2
        </Link>
      </p>
      <p>
        <Link href="/server-side">
          Use Apollo Client inside React Server Component (RSC)
        </Link>
      </p>

    </main>
  )
}
