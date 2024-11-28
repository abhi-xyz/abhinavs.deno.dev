import * as gfm from "@deno/gfm";
import { Handlers, PageProps } from "$fresh/server.ts";
import type { State } from "../../utils/state.ts";
import { loadPost, type Post } from "../../utils/posts.ts";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../islands/Header.tsx";

import "npm:prismjs@1.29.0/components/prism-rust.js";
import "npm:prismjs@1.29.0/components/prism-typescript.js";
import "npm:prismjs@1.29.0/components/prism-bash.js";
import "npm:prismjs@1.29.0/components/prism-nix.min.js";

interface Data extends State {
  post: Post;
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.id);
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    return ctx.render({ ...ctx.state, post });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const { post, locales } = props.data;
  const dateFmt = new Intl.DateTimeFormat(locales, { dateStyle: "full" });
  const html = gfm.render(post.content);
  return (
    <body className="h-fit !bg-latte-crust dark:!bg-mocha-crust !text-latte-text dark:!text-mocha-text">
      <Navbar />
      <div class="px-4 mx-auto max-w-3xl">
        <p class="mt-12">{dateFmt.format(post.publishAt)}</p>
        {/*<p class="">updated at: {post.updatedAt}</p>*/}
        <h1 class="font-bold text-5xl mt-2">{post.title}</h1>
        <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
        <div
          class={"mt-12 !bg-latte-crust dark:!bg-mocha-crust !text-latte-text dark:!text-mocha-text" +
            " markdown-body"}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Footer />
      </div>
    </body>
  );
}
