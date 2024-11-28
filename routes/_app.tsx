import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhinandh S</title>
        <link rel="icon" href="favicon.png" type="image/png" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {
          /*
       */
        }
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Abhi's Blog RSS Feed"
          href="/feed.atom"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Abhi's Blog RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
