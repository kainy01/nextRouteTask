"use client";

import { useState, useEffect } from "react";
import getUser from "../../../lib/getUser";
import getUserPosts from "../../../lib/getUserPosts";
import Image from "next/image";

function User({ params }) {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUser(params.slag).then((res) => setUser(res));
    getUserPosts(params.slag).then((res) => setPosts(res));
  }, []);

  return (
    <div className="mb-4 lg:mb-6 not-format">
      <address className="flex items-center mb-6 not-italic">
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <Image
          className="mx-4 w-20 h-25"
          src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1686694451~exp=1686695051~hmac=e95d2b62fa2f7a36cde757d1ba63af1826642cac3bceca694ec4e503119ed32b"
          alt="user"
          width={104}
          height={200}
        />
          <div>
            <h1
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              {user.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              username: @{user.username}
            </p>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
             Email: {user.email}
            </p>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
            Phone:  {user.phone}
            </p>
          </div>
        </div>
      </address>
      <h1 className="text-center text-3xl font-bold my-5">{user.name} Posts:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3">
      {posts.map((post) => (
        <div key={post.id} className="bg-blue-200 p-6 shadow-md rounded">
          <h4 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl text-dark">
            {post.title}
          </h4>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default User;
