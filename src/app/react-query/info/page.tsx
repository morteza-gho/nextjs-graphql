'use client';

import useAPI from "@/hooks/useAPI/useAPI"

export default function Info() {

  const { data } = useAPI('/schools/info', 'get', {});
  console.log(data)

  return (
    <section className="max-w-7xl mx-auto my-8">
      <h3 className="text-3xl font-bold text-center mb-8">Information</h3>

      <div className="bg-blue-200 w-[600px] mx-auto p-6 rounded-lg space-y-3">
        <div className="grid grid-cols-2 gap-x-10">
          <p className="text-lg">First name:</p>
          <p className="text-lg font-bold">{data?.firstName}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          <p className="text-lg">Last name:</p>
          <p className="text-lg font-bold">{data?.lastName}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          <p className="text-lg">Email:</p>
          <p className="text-lg font-bold">{data?.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          <p className="text-lg">Phone:</p>
          <p className="text-lg font-bold">{data?.phone}</p>
        </div>
      </div>

    </section>
  )
}