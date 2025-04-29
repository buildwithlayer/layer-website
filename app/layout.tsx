import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
// import BlogBanner from "./_components/BlogBanner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layer",
  description: "Build Great MCP Servers for Your API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://apis.google.com/js/api.js"
          strategy="beforeInteractive"
        />
        <meta
          name="google-signin-client_id"
          content={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`}
        ></meta>
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
        {/* <BlogBanner /> */}
        <GoogleAnalytics gaId="G-6J1GTJ5G7L" />
      </body>
    </html>
  );
}
