import "./globals.css";

export const metadata = {
  title: "ClickNGro | Grow Smarter, Faster",
  description:
    "ClickNGro is a smart platform to streamline product launches, customer engagement, and business growth.",
  keywords: "ClickNGro, Product Launch, Marketing, Customer Engagement, Business Tools",
  authors: [{ name: "ClickNGro Team", url: "https://clickngro.com" }],
  metadataBase: new URL("https://clickngro.com"),
  openGraph: {
    title: "ClickNGro | Grow Smarter, Faster",
    description:
      "Streamline your product launch and marketing strategy with ClickNGro.",
    url: "https://clickngro.com",
    siteName: "ClickNGro",
    images: [
      {
        url: "/logo-og.png",
        width: 1200,
        height: 630,
        alt: "ClickNGro Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickNGro | Grow Smarter, Faster",
    description:
      "Smart solutions for launching, engaging, and growing your business.",
    site: "@clickngro",
    images: ["/logo-og.png"],
  },
  icons: {
    icon: "/Logo/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
