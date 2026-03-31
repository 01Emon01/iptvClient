"use client"

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-5 items-center justify-center p-10 min-h-90">
      <h1 className="text-xl md:text-3xl text-gray-700">404 page not found</h1>
      <div className="flex items-center gap-3">
        <button onClick={() => router.push('/')} className="py-2 px-5 bg-secondary-color rounded-lg text-white cursor-pointer">
          Home
        </button>
        <button onClick={() => router.back()} className="py-2 px-5 bg-primary-color rounded-lg text-white cursor-pointer">
          Go Back
        </button>
      </div>
    </div>
  );
}
