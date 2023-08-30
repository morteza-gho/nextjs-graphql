import Link from "next/link";

export default function ServerSideLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex justify-center p-8 gap-4">
        <Link href='/' className="py-2 px-4 border border-blue-400 rounded-md inline-block">Home</Link>
      </div>
      <div>{children}</div>
    </>
  )
}