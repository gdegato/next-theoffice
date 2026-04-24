import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to The Office App</h1>
      <p className="text-lg mb-8">
        Explore characters from the iconic TV show.
      </p>

      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dieHdjc3l5d3RtNGZ5bTBndDA1bjk2N29sa3Rvemk1b3Vxa25vZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xoV4JZ3cBaSGngdxxl/giphy.gif"
        alt="The Office GIF"
        className="w-full max-w-lg mb-8 rounded"
      />

      <Link href="/characters" className="text-blue-600 hover:underline text-lg">
        View All Characters →
      </Link>
    </main>
  );
}
