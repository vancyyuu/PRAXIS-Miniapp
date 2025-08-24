// app/layout.tsx
import type { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praxis",
  description: "Your on-chain talent network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}