import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/inedx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Client DRF",
  description: "DRF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="wrapperClass">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
