import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/base/Header";
import "../scss/main.scss";
import Footer from "@/components/base/Footer";
// import Login from "@/components/auth/Login";
// import Register from "@/components/auth/Register";
import { getSiteSettings } from "@/lib/getSiteSettings";
import MobileSlider from "@/components/base/interface/MobileSlider";

const nunito = Nunito({
  subsets: ["latin"],
});

export async function generateMetadata() {
  const data = await getSiteSettings();
  return {
    metadataBase: new URL("https://uaeiptvbox.net"),
    title: data.name,
    description: data.description,
    icons: {
      icon: `/favicon.png`,
    },
    openGraph: {
      title: data.name,
      description: data.description,
      url: "https://uaeiptvbox.net",
      siteName: data.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/openGraph.png",
          width: 1536,
          height: 1024,
          alt: "Logo",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <Header settings={settings} />
        {children}
        <Footer settings={settings} />
        <MobileSlider />
      </body>
    </html>
  );
}
