import Link from "next/link";

export default function UsersLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex justify-center p-8 gap-4">
        <Link href='/graph-ql/client-side/users' className="py-2 px-4 border border-blue-400 rounded-md inline-block">Users List 1</Link>
        <Link href='/graph-ql/client-side/users2' className="py-2 px-4 border border-blue-400 rounded-md inline-block">Users List 2</Link>
      </div>
      <div>{children}</div>
    </>
  )
}