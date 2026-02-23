import React, { useEffect } from "react";

// PUBLIC_INTERFACE
function App() {
  /** Root application component for the Tic Tac Toe frontend. */
  useEffect(() => {
    // Minimal, safe console message as requested; does not change app behavior.
    console.log("[tic_tac_toe_frontend] App mounted");
    console.log("[tic_tac_toe_frontend] App ready");
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 20 }}>Tic Tac Toe</h1>
      <p style={{ marginTop: 8, color: "#64748b" }}>Frontend container is running.</p>
    </main>
  );
}

export default App;
