'use client';
import useAPI from "@/hooks/useAPI/useAPI"

export default function Info() {

  const { data } = useAPI('/schools/info', 'get', {});
  console.log(data)

  return (
    <section className="max-w-7xl mx-auto my-8">
      <h3 className="text-3xl font-bold text-center mb-8">Get Info</h3>
    </section>
  )
}