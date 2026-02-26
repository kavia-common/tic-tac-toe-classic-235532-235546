import React from "react";
import { WelcomeConsoleLog } from "./welcome-console-log";

/**
 * Root layout for the application.
 * Note: Console logging is performed in a small client component to avoid SSR/runtime issues.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WelcomeConsoleLog />
        {children}
      </body>
    </html>
  );
}
