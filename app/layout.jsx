import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransitionEvent from "@/components/PagesTransition";
import StairTransition from "@/components/ui/stairTransition";

//components
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} antialiased`}
        suppressHydrationWarning>
        <Header />
        <PageTransitionEvent>
          <StairTransition />
        {children}
        </PageTransitionEvent>
        

      </body>
    </html>
  );
}