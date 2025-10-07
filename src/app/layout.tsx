import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highlander - Emma-Jane MacKinnon-Lee",
  description:
    "Clann Mhic Fhionghuin. Clan MacKinnon. From Dàl Riata to the Clearances.",
  metadataBase: new URL("https://emmajanemackinnonlee-highlander.com/"),
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "Highlander - Emma-Jane MacKinnon-Lee",
    description:
      "Clann Mhic Fhionghuin. Clan MacKinnon. From Dàl Riata to the Clearances.",
  },
  openGraph: {
    title: "Highlander - Emma-Jane MacKinnon-Lee",
    description:
      "Clann Mhic Fhionghuin. Clan MacKinnon. From Dàl Riata to the Clearances.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "syntheticfutures",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnonlee-highlander.com/",
                "https://emmajanemackinnonlee.shop/",
                "https://emmajanemacfhionghuin.com/",
                "https://emmajanemackinnonlee-aussie.com/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajanemackinnonlee.org/",
                "https://emmajanemackinnonlee-f3manifesto.com/",
                "https://emmajanemackinnonlee-digitalax.com/",
                "https://icoinedweb3fashion.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
