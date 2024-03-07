import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: 'Design app',
  icons: {
    icon: '/icon.png', 
  },
  }

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
        <Head>
  <title>{metadata.title}</title>
</Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
