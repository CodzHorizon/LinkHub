import FooterController from "@/components/FooterController";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/animationcontext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkHub",
  description: "Your smart, customizable bio link tool.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <AnimationProvider>
            <FooterController>
              {children}
            </FooterController>
          </AnimationProvider>
      </body>
    </html>
  );
}
