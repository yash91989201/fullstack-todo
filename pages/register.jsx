import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Image from "next/image";

export default function Register() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleFormChange = (event) => {
    setCredentials((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };
  const registerUser = (e) => {
    e.preventDefault();
    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) router.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="max-w-6xl mx-auto mt-16 flex justify-evenly items-center ">
      <div className="relative w-[480px] aspect-square">
        <Image src="/landing_img.svg" alt="landing img" layout="fill" />
      </div>
      <div className="flex flex-col">
        <h2 className="my-6 text-4xl font-semibold">Register</h2>
        <form className="w-80  flex flex-col">
          <input
            className="px-3 py-2 my-2 border border-black rounded-md"
            type="text"
            name="name"
            value={credentials.name}
            onChange={(e) => handleFormChange(e)}
            placeholder="Your Name"
          />
          <input
            className="px-3 py-2 my-2 border border-black rounded-md"
            type="text"
            name="email"
            value={credentials.email}
            onChange={(e) => handleFormChange(e)}
            placeholder="Your Email"
          />
          <input
            className="px-3 py-2 my-2 border border-black rounded-md"
            type="password"
            name="password"
            value={credentials.pasword}
            onChange={(e) => handleFormChange(e)}
            placeholder="password"
          />
          <button
            className="w-32  bg-blue-500 my-6 px-3 py-1 rounded-md text-white font-semibold "
            type="submit"
            onClick={registerUser}
          >
            Register
          </button>
          <Link href="/signin">
            <a className="text-purple-500">Already registered?</a>
          </Link>
        </form>
      </div>
    </main>
  );
}
