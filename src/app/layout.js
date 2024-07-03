import "./globals.css";

export const metadata = {
  title: "Compare Loans Online | Find The Best Rates & Apply Online | LoanOptions.ai",
  description: "Compare Loans With Loan Options. Over 60 Lenders Australia Wide. Apply Online Now & Find The Best Rate Using Powerful Data & AI Matching Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="au">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dns8eeo.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
