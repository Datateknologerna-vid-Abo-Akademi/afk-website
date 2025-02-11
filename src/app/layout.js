import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>AFK 2025</title>
        <link rel="icon" href="/images/AFK_logo_small.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Chakra+Petch" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
