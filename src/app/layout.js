"use client"; // Needed because AppBar uses useState

import "./globals.css";
import ResponsiveAppBar from "./components/appbar"; // adjust path if needed



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar /> {/* AppBar at the top */}
        <main>{children}  </main>
      </body>
    </html>
  );
}
