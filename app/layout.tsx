import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chi-ji.com"),
  title: "罗马西区华人教会",
  description: "立足罗马、服侍华人社群的基督教会。",
  openGraph: { title: "罗马西区华人教会", description: "主内一家 · 同心敬拜 · 共活真道", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "罗马西区华人教会", description: "主内一家 · 同心敬拜 · 共活真道", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN"><body>{children}</body></html>
  );
}
