import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: "SNUGGLI",
  description: "Forging a deeper relationship with your pet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
