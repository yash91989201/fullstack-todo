import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack Todo App</title>
        <meta name="description" content="Full Stack Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-6xl mx-auto mt-16 flex justify-evenly items-center ">
        <div className="relative w-[480px] aspect-square">
          <Image src="/landing_img.svg" alt="landing img" layout="fill" />
        </div>
        <div className="">
          <h2 className="my-6 font-semibold text-4xl">Full Stack Todo App</h2>
          <div className="space-x-6">
            <Link href="/register">
              <a className="bg-blue-500 px-4 py-2 text-white rounded-md">
                Register
              </a>
            </Link>
            <Link href="/signin">
              <a className="border-blue-500 border px-4 py-2 text-blue-500 rounded-md">
                Signin
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
