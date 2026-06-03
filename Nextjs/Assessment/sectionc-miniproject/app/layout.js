import "./globals.css";

export const metadata = {
  title: "Bio-Stack Builder",
  description: "Creator Link-in-Bio App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        {children}
      </body>
    </html>
  );
}