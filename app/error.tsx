// "use client";

// import { useEffect } from "react";

// export default function ErrorPage({
//   error,
//   unstable_retry,
// }: {
//   error: Error & { digest?: string };
//   unstable_retry: () => void;
// }) {
//   useEffect(() => {
//     console.error(error);
//   }, [error]);

//   return (
//     <div>
//       <div className="min-h-90 flex flex-col items-center justify-center text-center">
//         <h2 className="font-semibold text-4xl mb-1">503</h2>
//         <h2 className="font-semibold text-2xl mb-3">Service unavailable</h2>
//         <p className="text-lg text-gray-500">
//           Something went wrong! Please try again later
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error:", error);
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    console.error("Digest:", error.digest);
  }, [error]);

  return (
    <div>
      <h1>503</h1>
      <p>{error.message}</p>
    </div>
  );
}
