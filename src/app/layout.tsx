import "@/app/globals.css";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const ms_sans_serif = localFont({
  src: [
    { path: "../fonts/ms_sans_serif.woff2", weight: "400", style: "normal" },
    {
      path: "../fonts/ms_sans_serif_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  author: "Prem Kumar",
  title: "Prem Kumar - Full Stack Developer",
  description:
    "Full Stack Developer, Loves to build things on the web with Code and lot of Coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ms_sans_serif.className}>
      <body className="overflow-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
