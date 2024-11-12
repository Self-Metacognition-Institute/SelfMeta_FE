import React from "react";
import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-red-800">{children}</body>
    </html>
  )
}
