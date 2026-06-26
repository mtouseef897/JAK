
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/modules/components/layout/Header";
import Footer from "@/modules/components/layout/Footer";
import ScrollProgress from "@/modules/components/layout/ScrollProgress";
import CustomScripts from "@/modules/scripts/CustomScripts";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JAK",
  description: "The Power of Being Clear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        data-mobile-nav-style="full-screen-menu"
        data-mobile-nav-bg-color=""
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/923095004300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="btn btn-rounded rounded-full btn-box-shadow"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: 9999,
            backgroundColor: "#25D366",
            color: "#ffffff",
            border: "1px solid #1faa52",
            padding: "10px",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="bi bi-whatsapp" aria-hidden="true" />
        </a>
        <ScrollProgress />
        <CustomScripts />
      </body>
    </html>
  );
}
