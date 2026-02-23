"use client";

import { useEffect } from "react";

/**
 * Client-only component that logs a welcome message once on mount.
 */
export function WelcomeConsoleLog() {
  useEffect(() => {
    // Intentionally runs only in the browser (client-side).
    // eslint-disable-next-line no-console
    console.log("Welcome to Tic Tac Toe!");
  }, []);

  return null;
}
