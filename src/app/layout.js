"use client"; 

import "./globals.css";
import ResponsiveAppBar from "./components/appbar"; 



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar /> 
        <main>{children}  </main>
      </body>
    </html>
  );
}
