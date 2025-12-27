\"use client\";
import React, { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Surface the error in the console for easier debugging
    // (this is a client error boundary)
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div style={{ minHeight: "100vh" }} className="flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white/5 p-6 rounded-md">
        <h1 className="text-2xl font-semibold mb-2">Щось пішло не так</h1>
        <p className="mb-4 text-sm text-muted-foreground">{error?.message}</p>
        <div>
          <button
            onClick={() => reset()}
            className="inline-block rounded bg-primary px-4 py-2 text-white"
            type="button"
          >
            Спробувати знову
          </button>
        </div>
      </div>
    </div>
  );
}


