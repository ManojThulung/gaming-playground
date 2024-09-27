import Navbar from "@/components/Layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Creating Game",
  description:
    "Game Development is the art of creating games and describes the design, development and release.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen`}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
