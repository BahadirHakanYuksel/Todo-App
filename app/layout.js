import "./globals.css";

export const metadata = {
  title: "Todo App - bhy",
  description: "This is a simple todo app and my first project with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
