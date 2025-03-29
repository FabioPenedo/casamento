import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Provider from "@/Providers/Provider";

const fraunces = Fraunces({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Casamento Fábio e Verena",
  description: "Casamento Fábio e Verena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.className} antialiased`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
