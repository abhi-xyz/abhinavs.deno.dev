import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../islands/Header.tsx";
import { listPosts, Post } from "../../utils/posts.ts";
import { State } from "../../utils/state.ts";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Home(props: PageProps<Data>) {
  const { posts, locales } = props.data;
  return (
    <body className="h-lvh !bg-latte-crust dark:!bg-mocha-crust !text-latte-text dark:!text-mocha-text">
      <Navbar />
      <div class="px-4 mx-auto max-w-3xl">
        <h1 class="font-bold text-5xl mt-12">Abhi's Blog</h1>
        <ul class="mt-8">
          {posts.map((post) => <PostEntry post={post} locales={locales} />)}
        </ul>
        <Footer />
      </div>
    </body>
  );
}

function PostEntry(props: { post: Post; locales: string[] }) {
  const { post, locales } = props;
  const dateFmt = new Intl.DateTimeFormat(locales, { dateStyle: "medium" });
  return (
    <li class="border-t">
      <a href={`/articles/${post.id}`} class="py-2 flex group gap-4">
        <div className="min-w-24">{dateFmt.format(post.publishAt)}</div>
        <div>
          <h2 class="font-bold group-hover:underline">{post.title}</h2>
          <p class="text-gray-600">{post.snippet}</p>
        </div>
      </a>
    </li>
  );
}
