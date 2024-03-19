import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colorista - The easiest color palette generator on internet",
  description: "Create beautiful colors combinations for your designs.",
  keywords: [
    "color scheme",
    "scheme color",
    "color schemes",
    "color theme",
    "color palette",
    "color themes",
    "color palettes",
    "color combinations",
    "color",
    "colors",
    "palettes",
    "hex color wheel",
    "pastel color palette",
    "color wheel",
    "color combination",
    "color pallete",
    "color names",
    "web color schemes",
    "color wheel generator",
    "random color palette generator",
    "color schemes generator",
    "ui color palette generator",
    "pretty colors",
    "vintage color",
    "Free color palette generator",
    "Color scheme generator",
    "Online color palette tool",
    "Color combination generator",
    "Color palette creator",
    "Color palette maker",
    "Color palette generator website",
    "Best color palette generator",
    "Custom color palette generator",
    "Professional color palette generator",
    "Easy color palette generator",
    "Beautiful color palette generator",
    "Trendy color palette generator",
    "Modern color palette generator",
    "Creative color palette generator",
    "Unique color palette generator",
    "Interactive color palette generator",
    "User-friendly color palette generator",
    "Versatile color palette generator",
    "Accessible color palette generator",
    "Color palette generator for designers",
    "Color palette generator for artists",
    "Color palette generator for websites",
    "Color palette generator for branding",
    "Color palette generator for marketing",
    "Color palette generator for social media",
    "Color palette generator for UI/UX",
    "Color palette generator for graphic design",
    "Color palette generator for interior design",
    "Color palette generator for fashion",
    "Color palette generator for photography",
    "Color palette generator for illustrations",
    "Color palette generator for presentations",
    "Color palette generator for logos",
    "Color palette generator for blogs",
    "Color palette generator for apps",
    "Color palette generator for print materials",
    "Color palette generator for wedding themes",
    "Color palette generator for event planning",
    "Color palette generator for home decor",
    "Color palette generator for product design",
    "Color palette generator for branding agencies",
    "Color palette generator for small businesses",
    "Color palette generator for startups",
    "Color palette generator for educational materials",
    "Color palette generator for e-commerce",
    "Color palette generator for food industry",
    "Color palette generator for travel websites",
    "Color palette generator for nature themes",
    "Color palette generator for health and wellness"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gtmId="G-6DL9LFWCKE" />
      <GoogleTagManager gtmId="G-6DL9LFWCKE" />
    </html>
  );
}
