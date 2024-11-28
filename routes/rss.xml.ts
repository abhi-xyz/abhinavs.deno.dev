import type { Handlers } from "$fresh/server.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const posts = await listPosts();

    const items = posts
      .map((post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>https://abhinandhs.in/articles/${post.id}</link>
          <description><![CDATA[${post.content}]]></description>
          <pubDate>${new Date(post.publishAt).toUTCString()}</pubDate>
        </item>
      `)
      .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
          <title>Abhi's Blog</title>
          <link>https://abhinandhs.in</link>
          <description>Latest articles and updates from Abhi's blog</description>
          ${items}
        </channel>
      </rss>`;

    return new Response(rss, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    });
  },
};
