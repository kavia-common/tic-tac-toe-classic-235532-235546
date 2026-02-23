import React, { useEffect } from "react";

// PUBLIC_INTERFACE
export default function App() {
  /** Root application component for the Tic Tac Toe frontend. */

  useEffect(() => {
    // Minimal, safe console output requested by the task.
    console.log("[tic_tac_toe_frontend] App mounted");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f9fafb",
        color: "#111827",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        padding: 24
      }}
    >
      <section
        style={{
          width: "min(520px, 100%)",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: 24
        }}
        aria-label="Tic Tac Toe"
      >
        <h1 style={{ margin: 0, fontSize: 24 }}>Tic Tac Toe</h1>
        <p style={{ marginTop: 8, marginBottom: 0, color: "#64748b" }}>
          Frontend scaffold created for buildability. Game UI will be implemented
          in subsequent tasks.
        </p>
      </section>
    </main>
  );
}
