import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Welcome to My Video Compressor App</h1>
      <p className="mt-4 text-lg text-gray-500">Start by uploading a video to compress.</p>
    </main>
  );
}