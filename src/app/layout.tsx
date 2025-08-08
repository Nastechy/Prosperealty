import type { Metadata } from "next";
import "./globals.css";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";



export const metadata: Metadata = {
  title: 'Prosperealty',
  description: 'Buy verified lands and properties with ease.',
  metadataBase: new URL("https://www.prosperealty.com"),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
