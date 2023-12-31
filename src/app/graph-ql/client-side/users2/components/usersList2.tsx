"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";

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

export default function UsersList2() {

  const [count, setCount] = React.useState(0);
  // useSuspenseQuery to send request in server side - generate DOM and then render component
  const { data, error } = useSuspenseQuery<Response>(query);

  return (
    <section className="max-w-7xl mx-auto my-8">

      <h3 className="text-3xl font-bold text-center mb-8">Users list 2</h3>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : !data ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="grid grid-cols-4 gap-4">
          {data?.users.map((user: any) => (
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
      ) : null}
    </section>
  );
}
