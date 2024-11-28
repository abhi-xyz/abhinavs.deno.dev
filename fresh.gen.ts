// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $articles_id_ from "./routes/articles/[id].tsx";
import * as $articles_index from "./routes/articles/index.tsx";
import * as $articles_justindex from "./routes/articles/justindex.tsx";
import * as $feed_atom from "./routes/feed.atom.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $portfolio from "./routes/portfolio.tsx";
import * as $rss_xml from "./routes/rss.xml.ts";
import * as $search from "./routes/search.tsx";
import * as $Header from "./islands/Header.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/articles/[id].tsx": $articles_id_,
    "./routes/articles/index.tsx": $articles_index,
    "./routes/articles/justindex.tsx": $articles_justindex,
    "./routes/feed.atom.ts": $feed_atom,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/portfolio.tsx": $portfolio,
    "./routes/rss.xml.ts": $rss_xml,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/Header.tsx": $Header,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
