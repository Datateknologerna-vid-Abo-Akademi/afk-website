import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>AFK 2025</title>
        <link rel="icon" href="/images/AFK_logo_small.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1, viewport-fit=cover" />
        <meta content="script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com;" httpEquiv="Content-Security-Policy" />
        <link href="https://fonts.googleapis.com/css?family=Chakra+Petch" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600" rel="stylesheet" />
      </head>
      <body className="bg-gray-800">
        {children}
      </body>
    </html>
  );
}
