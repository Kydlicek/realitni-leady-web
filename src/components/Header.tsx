import Head from "next/head";

export default function Header({
  title = "Realitní leady - Pro makléře",
  description = "Získejte realitní leady bez stresu. Detailní informace o klientovi vždy po ruce.",
  keywords = "realitní leady, makléř, nemovitosti, prodej, reality, leady",
  ogTitle = "Realitní leady pro makléře",
  ogDescription = "Realitní leady bez stresu s detailními informacemi o klientovi.",
  ogImage = "/favicon/favicon-32x32.png",
  ogUrl = "https://www.realitni-leady.cz",
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicons for multiple devices */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Manifest for PWA compatibility */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to improve loading performance */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Preload Roboto font */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </noscript>

      {/* Additional Metadata for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Realitní leady Team" />

      {/* Structured Data (JSON-LD for rich snippets) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Realitní leady",
            url: ogUrl,
            logo: "/images/logo.png",
            sameAs: [
              "https://www.facebook.com/realitnileady",
              "https://www.linkedin.com/company/realitnileady",
            ],
          }),
        }}
      />
    </Head>
  );
}
