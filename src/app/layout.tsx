import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gastritis y Colon Irritable en Medellín - Dr. Willmer Obregón",
  description: "Alivio real y un plan médico personalizado para reducir el dolor, mejorar tu digestión y recuperar la energía con el Dr. Willmer Obregón.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Willmer Obregón",
              "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d1704aa7-153e-49e3-b4b6-de0676c393f3/Dr.-Willmer-Obregon-1772655452848.jpg",
              "url": "https://internistamedellin.com",
              "telephone": "+573053979628",
              "address": {
                "@type": "PostalAddress",
                  "streetAddress": "Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "postalCode": "05001",
                "addressCountry": "CO"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "234"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTRKGD87');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTRKGD87"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
