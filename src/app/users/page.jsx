"use client";
import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import getAllUsers from "../../lib/getAllUsers";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setUsers(res));
  }, []);

  return (
    <div className="flex flex-wrap">
    {users.map((user) => (
      <div key={user.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
        <Link href={`/users/${user.id}`}>
        <div className="flex g-3 items-start justify-start mr-3 text-sm bg-white rounded-lg shadow-md p-4 text-gray-900 h-full">
  <Image
    className="mr-4 w-20 h-25"
    src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1686694451~exp=1686695051~hmac=e95d2b62fa2f7a36cde757d1ba63af1826642cac3bceca694ec4e503119ed32b"
    alt="user"
    width={200}
    height={100}
  />
  <div className="text-left">
    <h1 className="text-xl font-bold text-gray-500 ">{user.name}</h1>
    <p className="text-base font-light text-gray-500 dark:text-gray-400">username: @{user.username}</p>
    <p className="text-base font-light text-gray-500 dark:text-gray-400">Email: {user.email}</p>
    <p className="text-base font-light text-gray-500 dark:text-gray-400">Phone: {user.phone}</p>
  </div>
</div>

        </Link>
      </div>
    ))}
  </div>
  
  );
}

export default Users;
