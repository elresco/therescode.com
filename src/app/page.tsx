import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 pt-0 px-4 pb-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Rescode
        </h1>
        <div className="flex flex-row gap-2">
          <Link className="flex-grow text-3xl p-4 rounded-lg bg-purple-500 text-white font-bold border-2 border-purple-500 hover:bg-white hover:text-purple-500" href={"https://github.com/therescode"}>GitHub</Link>
          <Link className="flex-grow text-3xl p-4 rounded-lg bg-gray-900 text-white font-bold border-2 border-gray-900 hover:bg-white hover:text-gray-900" href={"https://x.com/therescode"}>x</Link>
          <Link className="flex-grow text-3xl p-4 rounded-lg bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" href={"https://educabitcoin.com"}>EducaBitcoin</Link>
        </div>
      </div>
    </main>
  )
}
