"use client";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h2 className="font-semibold text-4xl mb-1">503</h2>
          <h2 className="font-semibold text-2xl mb-3">Service unavailable</h2>
          <p className="text-lg text-gray-500">
            Something went wrong! Please try again later
          </p>
        </div>
      </body>
    </html>
  );
}
