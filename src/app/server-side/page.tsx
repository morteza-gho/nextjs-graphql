import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import React from "react";

export const dynamic = "force-dynamic"; // To ensure that the page always displays the latest data

const query = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

interface Response {
  users: { id: number; name: string; email: string }[];
}

export default async function ServerSide() {
  const data = await getClient().query<Response>({
    query,
  });

  return (
    <section className="max-w-7xl mx-auto my-12">
      <div className="grid grid-cols-4 gap-4">
        {data.data.users.map((user) => (
          <div
            key={user.id}
            className="rounded-md p-4 flex flex-col gap-4 items-center border border-gray-400"
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=144x144`}
              alt={user.name}
              className="w-36 aspect-square"
            />
            <h3 className="font-bold">{user.name}</h3>
            <h4 className="font-normal">{user.email}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
