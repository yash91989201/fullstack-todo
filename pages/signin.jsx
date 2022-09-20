import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleFormChange = (event) => {
    setCredentials((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };
  const signinUser = (e) => {
    e.preventDefault();
    fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) router.push("/todos");
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  };

  return (
    <main className="max-w-6xl mx-auto mt-16 flex justify-evenly items-center ">
      <div className="relative w-[480px] aspect-square">
        <Image src="/landing_img.svg" alt="landing img" layout="fill" />
      </div>
      <div className="flex flex-col">
        <h2 className="my-6 text-4xl font-semibold">Signin</h2>
        <form className="w-80  flex flex-col">
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
            onClick={signinUser}
          >
            Signin
          </button>
          <Link href="/register">
            <a className="text-purple-500">Not a user?</a>
          </Link>
        </form>
      </div>
    </main>
  );
}
