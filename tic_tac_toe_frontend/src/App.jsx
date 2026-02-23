import React from "react";

export default function App() {
  console.log("App rendered"); // one-line console log as requested
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", padding: 24 }}>
      <h1 style={{ margin: 0 }}>Tic Tac Toe</h1>
    </main>
  );
}
