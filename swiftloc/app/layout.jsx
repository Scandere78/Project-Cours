import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from './components/ui/Navbar';

const anton = Anton ({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Swiftloc",
  description: "SwiftLoc Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={anton.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
