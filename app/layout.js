import { Outfit, Ovo} from "next/font/google";
import "./globals.css";
import GradientBackground from "../components/GradientBackground";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Ashish Chaurasiya",
  description: "System & Backend Developer from Uttar Pradesh, India specializing in Backend Systems, Game Servers, and Agile Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
