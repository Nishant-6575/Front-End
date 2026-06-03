export const metadata = {
  title: "Creator Portfolio Builder",
  description: "Portfolio Item Manager",
};

import "./globals.css";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}