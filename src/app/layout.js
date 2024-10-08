import "./globals.css";

// Import slick-carousel css files
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Compare Loans Online | Find The Best Rates & Apply Online | LoanOptions.ai",
  description: "Compare Loans With Loan Options. Over 60 Lenders Australia Wide. Apply Online Now & Find The Best Rate Using Powerful Data & AI Matching Technology.",
  metadataBase: new URL('https://www.loanoptions.co.nz/'),
  openGraph: {
    images: '/robot_3_0.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dns8eeo.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.typekit.net/sit6xju.css"></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MK7PWSK5');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X7N2ZFP1ZT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X7N2ZFP1ZT');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MK7PWSK5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
